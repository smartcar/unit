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

var round = function(n, places){
  return +(Math.round(n + "e+" + places) + "e-" + places);
}

module.exports = function(value, fromUnit){
  var methods = {};
  methods.to = function(toUnit, decimalPlaces){
    var internal = table[fromUnit].to(value);
    var output = table[toUnit].from(internal);
    return decimalPlaces ? round(output, decimalPlaces) : output;
  }
  methods.as = methods.to;
  methods.in = methods.to;
  return methods;
}
