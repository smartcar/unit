# Unit Conversion Library

convert between distance, pressure, and temperature units easily!

# Installation

`$ npm install units`

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

# Example Usage
```javascript
var unit = require('unit');
var distance = unit(184000, 'km');
distance.as('miles');
```
