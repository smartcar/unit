'use strict';
var IN_PER_KM = 39370.1,
    FT_PER_KM = 3280.84,
    MI_PER_KM = 0.621371,
    M_PER_KM = 1000,
    PSI_PER_KPA = 0.145038,
    PA_PER_KPA = 1000,
    BAR_PER_KPA = 0.01,
    MBAR_PER_KPA = 10,
    MMHG_PER_KPA = 7.50061561303;

var to_internal = {
  in: function(inch){ return inch / IN_PER_KM; },
  ft: function(ft){ return ft / FT_PER_KM; },
  mi: function(mi){ return mi / MI_PER_KM; },
  m: function(m){ return m / M_PER_KM; },
  km: function(km){ return km; },

  psi: function(psi){ return psi / PSI_PER_KPA; },
  pa: function(pa){ return pa / PA_PER_KPA; },
  bar: function(bar){ return bar / BAR_PER_KPA; },
  mbar: function(mbar){ return mbar / MBAR_PER_KPA; },
  mmhg: function(mmhg){ return mmhg / MMHG_PER_KPA; },
  kpa: function(kpa){ return kpa; },

  k: function(k){ return k - 273.15; },
  f: function(f){ return (f - 32) * 5/9; },
  c: function(c){ return c; }
  
};
var internal_to = {
  inch: function(km){ return km * IN_PER_KM; },
  ft: function(km){ return km * FT_PER_KM; },
  mi: function(km){ return km * MI_PER_KM; },
  m: function(km){ return km * M_PER_KM; },
  km: function(km){ return km; },

  psi: function(kpa){ return kpa * PSI_PER_KPA; },
  pa: function(kpa){ return kpa * PA_PER_KPA; },
  bar: function(kpa){ return kpa * BAR_PER_KPA; },
  mbar: function(kpa){ return kpa * MBAR_PER_KPA; },
  mmhg: function(kpa){ return kpa * MMHG_PER_KPA; },
  kpa: function(kpa){ return kpa; },

  k: function(c){ return c + 273.15; },
  f: function(c){ return c * 9/5 + 32; },
  c: function(c){return c; }
};
var unalias = function(unit){
  var aliases = [
    'in inch inches',
    'ft foot feet',
    'mi mile miles',
    'm meter meters',
    'km kilometer kilometers',
    'psi psis',
    'pa pascal pascals',
    'bar bars',
    'mbar millibar mbars millibars',
    'mmhg',
    'kpa kpas kilopascal kilopascals',
    'k kelvin kelvins',
    'f fahrenheit',
    'c celcius'
  ]
  for (var alias in aliases){
    var list = aliases[alias].split(' ');
    if (list.indexOf(unit.toLowerCase()) > -1){
      return list[0];
    }
  }
};

module.exports = function(value, from_unit){
  var methods = {};
  var from_unit = unalias(from_unit);
  methods.to = function(to_unit){
    var to_unit = unalias(to_unit);
    var internal = to_internal[from_unit](value);
    return internal_to[to_unit](internal);
  }
  methods.as = methods.to;
  methods.in = methods.to;

  return methods;
}