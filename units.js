'use strict';

module.exports = {
  in: {
    base: 1000 / 0.3048 * 12,
    aliases: ['inch', 'inches'],
  },
  ft: {
    base: 1000 / 0.3048,
    aliases: ['foot', 'feet'],
  },
  mi: {
    base: 1 / 1.609344,
    aliases: ['mile', 'miles'],
  },
  cm: {
    base: 100000,
    aliases: ['centimeter', 'centimeters'],
  },
  m: {
    base: 1000,
    aliases: ['meter', 'meters', 'metre', 'metres'],
  },
  km: {
    base: 1,
    aliases: ['kilometer', 'kilometers'],
  },
  psi: {
    base: 0.145038,
    aliases: ['psis'],
  },
  pa: {
    base: 1000,
    aliases: ['pascal', 'pascals'],
  },
  bar: {
    base: 0.01,
    aliases: ['bars'],
  },
  mbar: {
    base: 10,
    aliases: ['millibar', 'millibars', 'mbars', 'hectopascal', 'hectopascals'],
  },
  mmhg: {
    base: 7.50061561303,
    aliases: ['torr'],
  },
  atm: {
    base: 0.00986923,
    aliases: ['atmosphere', 'atmospheres', 'atmospheric', 'barometric'],
  },
  kpa: {
    base: 1,
    aliases: ['kpas', 'kilopascal', 'kilopascals'],
  },
  k: {
    from: function(c) { return c + 273.15; },
    to: function(k) { return k - 273.15; },
    aliases: ['kelvin', 'kelvins'],
  },
  f: {
    from: function(c) { return (c * 9 / 5) + 32; },
    to: function(f) { return (f - 32) * 5 / 9; },
    aliases: ['fahrenheit'],
  },
  c: {
    from: function(c) { return c; },
    to: function(c) { return c; },
    aliases: ['celsius', 'centigrade'],
  },
  oz: {
    base: 35.274,
    aliases: ['ounce', 'ounces'],
  },
  lb: {
    base: 2.20462,
    aliases: ['pound', 'lbs', 'pounds'],
  },
  g: {
    base: 1000,
    aliases: ['gm', 'gram', 'grams'],
  },
  kg: {
    base: 1,
    aliases: ['kilogram', 'kilograms'],
  },
  ml: {
    base: 1000,
    aliases: ['milliliter', 'milliliters', 'millilitre', 'millilitres'],
  },
  l: {
    base: 1,
    aliases: ['liter', 'liters', 'litre', 'litres'],
  },
  usgal: {
    base: 0.264172,
    aliases: ['usgallon', 'usgallons'],
  },
  gal: {
    base: 0.219969,
    aliases: ['gallon', 'gallons'],
  },
  kmpl: {
    base: 1,
    aliases: ['km/l'],
  },
  mpg: {
    base: 2.35215,
    aliases: [],
  },
};
