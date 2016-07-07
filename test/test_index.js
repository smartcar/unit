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
  })
  test('inches', function(){
    var km = unit(100000, 'inches').as('km');
    expect(km).to.be.closeTo(2.54, 0.0001);
  });
  test('feet', function(){
    var km = unit(10000, 'feet').as('km');
    expect(km).to.be.closeTo(3.048, 0.0001);
  });
  test('miles', function(){
    var km = unit(100, 'miles').as('kilometers');
    expect(km).to.be.closeTo(160.934, 0.1);
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
    var celcius = unit(300, 'kelvins').as('c');
    expect(celcius).to.be.closeTo(26.85, 0.01);
  });
  test('fahrenheit', function(){
    var celcius = unit(100, 'fahrenheit').as('celcius');
    expect(celcius).to.be.closeTo(37.7778, 0.0001);
  });
  test('celcius', function(){
    var celcius = unit(100, 'c').as('celcius');
    expect(celcius).to.equal(100);
  });
});