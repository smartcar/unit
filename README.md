# Unit Conversion Library [![NPM package][npm-image]][npm-url] [![Build Status][ci-image]][ci-url] [![Coverage][coverage-image]][coverage-url] [![Greenkeeper][gk-image]][gk-url]

Convert between distance, pressure, temperature, volume and mass units easily!

# Installation

`$ npm install smartcar-unit`

# Example Usage

```javascript
var unit = require('smartcar-unit');
var miles = unit(184000, 'miles');
var kilometers = miles.as('kilometers'); // 296119.296
var kilometersRounded = miles.as('kilometers', 2); // 296119.3
```

# Supported Units

| Distance | aliases |
|----------|---------|
| inch | `in` `inch` `inches`|
| foot | `ft` `foot` `feet` |
| mile | `mi` `mile` `miles` |
| meter | `m` `meter` `meters` `metre` `metres` |
| kilometer | `km` `kilometer` `kilometers` |

| Pressure | aliases |
|----------|---------|
| pounds per square inch| `psi` `psis` |
| pascal | `pa` `pascal` `pascals` |
| bar | `bar` `bars` |
| millibar | `mbar` `millibar` `mbars` `millibars` `hectopascal` `hectopascals` |
| millimeter of mercury | `mmhg` `torr` |
| atmospheric | `atmosphere` `atmospheres` `atmospheric` `barometric` |
| kilopascal | `kpa` `kpas` `kilopascal` `kilopascals` |

| Temperature | aliases |
| ----------- | ------- |
| kelvin | `k` `kelvin` `kelvins` |
| fahrenheit | `f` `fahrenheit` |
| celsius | `c` `celsius` `centigrade` |

| Mass | aliases |
| ---- | ------- |
| ounce | `oz` `ounce` `ounces` |
| pound | `lb` `lbs` `pound` `pounds` |
| gram | `g` `gm` `gram` `grams` |
| kilogram | `kg` `kilogram` `kilograms` |

| Volume | aliases |
| ------ | ------- |
| milliliter  | `ml` `milliliter` `milliliters` `millilitre` `millilitres`|
| liter  | `l` `liter` `liters` `litre` `litres`|
| us gallon | `usgal` `usgallon` `usgallons` |
| imperial gallon | `gal` `gallon` `gallons` |

[npm-url]: https://www.npmjs.com/package/smartcar-unit
[npm-image]: https://img.shields.io/npm/v/smartcar-unit.svg?style=flat-square

[ci-url]: https://travis-ci.org/smartcar/unit
[ci-image]: https://img.shields.io/travis/smartcar/unit/master.svg?style=flat-square

[coverage-url]: https://codecov.io/gh/smartcar/unit
[coverage-image]: https://img.shields.io/codecov/c/github/smartcar/unit/master.svg?style=flat-square

[gk-url]: https://greenkeeper.io
[gk-image]: https://badges.greenkeeper.io/smartcar/unit.svg
