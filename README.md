# Unit Conversion Library [![Build Status](https://travis-ci.org/smartcar/unit.svg?branch=master)](https://travis-ci.org/smartcar/unit) [![Coverage Status](https://coveralls.io/repos/github/smartcar/unit/badge.svg?branch=master)](https://coveralls.io/github/smartcar/unit?branch=master) [![NPM version](https://img.shields.io/npm/v/smartcar-unit.svg)](https://www.npmjs.com/package/smartcar-unit)

convert between distance, pressure, and temperature units easily!

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
|------|---------|
| inch | `in` `inch` `inches`|
| foot | `ft` `foot` `feet` |
| mile | `mi` `mile` `miles` |
| meter | `m` `meter` `meters` `metre` `metres` |
| kilometer | `km` `kilometer` `kilometers` |

| Pressure | aliases |
|----------------|---------|
| pounds per square inch| `psi` `psis` |
| pascal | `pa` `pascal` `pascals` |
| bar | `bar` `bars` |
| millibar | `mbar` `millibar` `mbars` `millibars` `hectopascal` `hectopascals` |
| millimeter of mercury | `mmhg` `torr` |
| atmospheric | `atmosphere` `atmospheres` `atmospheric` `barometric` |
| kilopascal | `kpa` `kpas` `kilopascal` `kilopascals` |

| Temperature | aliases |
| ----------------- | ------- |
| kelvin | `k` `kelvin` `kelvins` |
| fahrenheit | `f` `fahrenheit` |
| celcius | `c` `celcius` `centigrade` |
