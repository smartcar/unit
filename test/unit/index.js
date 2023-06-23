'use strict';

const test = require('ava');
const unit = require('../../index');

function approximately(value, expected) {
  return Math.abs(value - expected) <= 0.0001;
}

test('in, as, and to syntaxes are equivalent', function(t) {
  const inches = unit(12, 'inches');
  const toSyntax = inches.to('feet');
  const asSyntax = inches.as('feet');
  const inSyntax = inches.in('feet');
  t.is(toSyntax, inSyntax);
  t.is(toSyntax, asSyntax);
});

test('rounding', function(t) {
  const rounded = unit(13, 'inches').to('feet', 2);
  t.is(rounded, 1.08);
});

test('inches', function(t) {
  const km = unit(100000, 'inches').as('km');
  t.true(approximately(km, 2.54));
});

test('feet', function(t) {
  const km = unit(10000, 'feet').as('km');
  t.true(approximately(km, 3.048));
});

test('miles', function(t) {
  const km = unit(184000, 'miles').as('kilometers');
  t.true(approximately(km, 296119.296));
});

test('meters', function(t) {
  const km = unit(1000, 'meters').as('km');
  t.is(km, 1);
});
test('millimeters', function(t) {
  const mm = unit(19, 'in').as('mm');
  t.is(mm, 482.6);
});

test('kilometers', function(t) {
  const km = unit(1, 'kilometer').as('kilometer');
  t.is(km, 1);
});

test('psi', function(t) {
  const kpa = unit(100, 'psi').as('kpa');
  t.true(approximately(kpa, 689.4744));
});

test('pascals', function(t) {
  const kpa = unit(1000, 'pascals').as('kilopascal');
  t.is(kpa, 1);
});

test('bars', function(t) {
  const kpa = unit(1, 'bar').as('kpa');
  t.is(kpa, 100);
});

test('millibars', function(t) {
  const kpa = unit(100, 'millibars').as('kpa');
  t.is(kpa, 10);
});

test('mmhg', function(t) {
  const kpa = unit(100, 'mmhg').as('kpa');
  t.true(approximately(kpa, 13.3322));
});

test('kilopascals', function(t) {
  const kpa = unit(1, 'kpa').as('kilopascals');
  t.is(kpa, 1);
});

test('kelvins', function(t) {
  const fahrenheit = unit(300, 'kelvins').as('f');
  t.true(approximately(fahrenheit, 80.33));
});

test('fahrenheit', function(t) {
  const celsius = unit(100, 'fahrenheit').as('celsius');
  t.true(approximately(celsius, 37.7778));
});

test('celsius', function(t) {
  const kelvin = unit(100, 'c').as('kelvin');
  t.is(kelvin, 373.15);
});

test('ounces', function(t) {
  const kg = unit(100, 'ounces').as('kg');
  t.true(approximately(kg, 2.83495));
});

test('pounds', function(t) {
  const kg = unit(100, 'lbs').as('kg');
  t.true(approximately(kg, 45.3592));
});

test('grams', function(t) {
  const kg = unit(1000, 'grams').as('kg');
  t.is(kg, 1);
});

test('kilograms', function(t) {
  const kg = unit(1, 'kg').as('kg');
  t.is(kg, 1);
});

test('milliliters', function(t) {
  const l = unit(1000, 'milliliters').as('l');
  t.is(l, 1);
});

test('liters', function(t) {
  const l = unit(1, 'l').as('l');
  t.is(l, 1);
});

test('usgallons', function(t) {
  const l = unit(0.264172, 'usgallons').as('l');
  t.is(l, 1);
});

test('gallons', function(t) {
  const l = unit(0.219969, 'gallons').as('l');
  t.is(l, 1);
});

test('uppercase', function(t) {
  const l = unit(0.219969, 'GaLLons').as('l');
  t.is(l, 1);
});

test('kmpl', function(t) {
  const kmpl = unit(2.35215, 'mpg').as('kmpl');
  t.is(kmpl, 1);
});

test('mpg', function(t) {
  const mpg = unit(0.425144, 'kmpl').as('mpg');
  t.true(approximately(mpg, 1));
});

test('decimal degrees - dms is csv', function(t) {
  const dd = unit('90,30,30', 'dms').as('dd');
  t.true(approximately(dd, 90.50833));
});

test('decimal degrees - dms is array', function(t) {
  const dd = unit([90, 30, 30], 'dms').as('dd');
  t.true(approximately(dd, 90.50833));
});

test('dms', function(t) {
  const dms = unit(90.50833333333333, 'dd').as('dms');
  const [d, m, s] = dms.split(',');
  t.is(d, '90');
  t.is(m, '30');
  t.is(s, '30');
});

test('dms - decimal is integer', function(t) {
  const dms = unit(90, 'dd').as('dms');
  const [d, m, s] = dms.split(',');
  t.is(d, '90');
  t.is(m, '0');
  t.is(s, '0');
});

test('dms - seconds value is 0', function(t) {
  const dms = unit(90.5, 'dd').as('dms');
  const [d, m, s] = dms.split(',');
  t.is(d, '90');
  t.is(m, '30');
  t.is(s, '0');
});

test('dms - degree is negative', function(t) {
  const dms = unit(-90.50833333333333, 'dd').as('dms');
  const [d, m, s] = dms.split(',');
  t.is(d, '-90');
  t.is(m, '30');
  t.is(s, '30');
});
