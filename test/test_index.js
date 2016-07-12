'use strict';
var expect = require('chai').use(require('dirty-chai')).expect;
var unit = require('../index');

suite('index', function(){
  test('in, as, and to syntaxes are equivalent', function(){
    var inches = unit(12, 'inches');
    var to_syntax = inches.to('feet');
    var as_syntax = inches.as('feet');
    var in_syntax = inches.in('feet');
    expect(to_syntax).to.equal(in_syntax);
    expect(to_syntax).to.equal(as_syntax);
  });
  test('rounding', function(){
    var rounded = unit(13, 'inches').to('feet', 2);
    expect(rounded).to.equal(1.08);
  });
  test('inches', function(){
    var km = unit(100000, 'inches').as('km');
    expect(km).to.be.closeTo(2.54, 0.0001);
  });
  test('feet', function(){
    var km = unit(10000, 'feet').as('km');
    expect(km).to.be.closeTo(3.048, 0.0001);
  });
  test('miles', function(){
    var km = unit(184000, 'miles').as('kilometers');
    expect(km).to.be.closeTo(296119.296, 0.001);
  });
  test('meters', function(){
    var km = unit(1000, 'meters').as('km');
    expect(km).to.equal(1);
  });
  test('kilometers', function(){
    var km = unit(1, 'kilometer').as('kilometer');
    expect(km).to.equal(1);
  });
  test('psi', function(){
    var kpa = unit(100, 'psi').as('kpa');
    expect(kpa).to.be.closeTo(689.476, 0.01);
  });
  test('pascals', function(){
    var kpa = unit(1000, 'pascals').as('kilopascal');
    expect(kpa).to.equal(1);
  });
  test('bars', function(){
    var kpa = unit(1, 'bar').as('kpa');
    expect(kpa).to.equal(100);
  });
  test('millibars', function(){
    var kpa = unit(100, 'millibars').as('kpa');
    expect(kpa).to.equal(10);
  });
  test('mmhg', function(){
    var kpa = unit(100, 'mmhg').as('kpa');
    expect(kpa).to.be.closeTo(13.3322, 0.0001);
  });
  test('kilopascals', function(){
    var kpa = unit(1, 'kpa').as('kilopascals');
    expect(kpa).to.equal(1);
  });
  test('kelvins', function(){
    var fahrenheit = unit(300, 'kelvins').as('f');
    expect(fahrenheit).to.be.closeTo(80.33, 0.01);
  });
  test('fahrenheit', function(){
    var celcius = unit(100, 'fahrenheit').as('celcius');
    expect(celcius).to.be.closeTo(37.7778, 0.0001);
  });
  test('celcius', function(){
    var kelvin = unit(100, 'c').as('kelvin');
    expect(kelvin).to.equal(373.15);
  });
  test('ounces', function(){
    var kg = unit(100, 'ounces').as('kg');
    expect(kg).to.be.closeTo(2.83495, 0.00001);
  });
  test('pounds', function(){
    var kg = unit(100, 'lbs').as('kg');
    expect(kg).to.be.closeTo(45.3592, 0.0001);
  });
  test('grams', function(){
    var kg = unit(1000, 'grams').as('kg');
    expect(kg).to.equal(1);
  });
  test('kilograms', function(){
    var kg = unit(1, 'kg').as('kg');
    expect(kg).to.equal(1);
  });
});