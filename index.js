'use strict';

const _ = require('lodash');
const units = require('./units');

const table = {};

Object.keys(units).forEach(function(key) {
  const unit = units[key];
  const aliases = unit.aliases.concat([key]);

  aliases.forEach(function(alias) {
    const base = unit.base;
    table[alias] = {
      to: base ? function(x) { return x / base; } : unit.to,
      from: base ? function(x) { return x * base; } : unit.from,
    };
  });
});

const round = function(n, places) {
  return Number(Math.round(n + 'e+' + places) + 'e-' + places);
};

module.exports = function(value, fromUnit) {
  const methods = {};
  methods.to = function(toUnit, decimalPlaces) {
    const internal = table[_.toLower(fromUnit)].to(value);
    const output = table[_.toLower(toUnit)].from(internal);
    return decimalPlaces ? round(output, decimalPlaces) : output;
  };
  methods.as = methods.to;
  methods.in = methods.to;
  return methods;
};
