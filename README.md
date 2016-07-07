### Unit Conversion Library

convert between distance and pressure units painlessly!

### Installation

    $ npm install 

#### Distance Units

* mile (1609.344 M, 1.60934 KM)
* inch (0.0254 M , 0.0000254 KM)
* foot (0.3048 M, 0.0003048 KM)
* kilometer
* meter (0.001 KM)

#### Pressure Units:

* PSI (6894.76 Pa)
* Pascal (1 Pa)
* Bar (100000 Pa, 100 kPa)
* millibar, hectopascal (100 Pa, 0.1 kPa)
* mmHg (133.322387415 Pa)

#### Temperature Units:

* Fahrenheit (5/9 * (F - 32) deg C)
* Celcius (1 deg C)
* Kelvin (K - 273.15 deg C)

#### Example Usage
```javascript
var unit = require('unit');
var distance = unit(184000, 'km');
distance.as('miles');