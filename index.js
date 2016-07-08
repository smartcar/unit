'use strict';
var units = require('./units');

var table = {};
for (var key in units){
  var unit = units[key];
  var aliases = unit.aliases.concat([key]);
  aliases.forEach(function(alias){
    var base = unit.base;
    table[alias] = {
      to: base ? function(x){ return x / base; } : unit.to,
      from: base ? function(x){ return x * base; } : unit.from
    }
  });
}

module.exports = function(value, fromUnit){
  var methods = {};
  methods.to = function(toUnit){
      var internal = table[fromUnit].to(value);
      return table[toUnit].from(internal)
  }
  methods.as = methods.to;
  methods.in = methods.to;
  return methods;
}
