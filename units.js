module.exports = {
  in: {
    'base': 39370.1,
    'aliases': ['inch', 'inches']
  },
  ft: {
    'base': 3280.84,
    'aliases': ['foot', 'feet']
  },
  mi: {
    'base': 0.621371,
    'aliases': ['mile', 'miles']
  },
  m: {
    base: 1000,
    aliases: ['meter', 'meters', 'metre', 'metres' ]
  },
  km: {
    base: 1,
    aliases: ['kilometer', 'kilometers']
  },
  psi: {
    base: 0.145038,
    aliases: ['psis']
  },
  pa: {
    base: 1000,
    aliases: ['pascal', 'pascals']
  },
  bar: {
    base: 0.01,
    aliases: ['bars']
  },
  mbar: {
    base: 10,
    aliases: ['millibar', 'millibars', 'mbars', 'hectopascal', 'hectopascals']
  },
  mmhg: {
    base: 7.50061561303,
    aliases: ['torr']
  },
  atm: {
    base: 0.00986923,
    aliases: ['atmosphere', 'atmospheres', 'atmospheric', 'barometric']
  },
  kpa: {
    base: 1,
    aliases: ['kpas', 'kilopascal', 'kilopascals']
  },
  k: {
    from: function(c){ return c + 273.15; },
    to: function(k){ return k - 273.15; },
    aliases: ['kelvin', 'kelvins']
  },
  f: {
    from: function(c){ return c * 9/5 + 32; },
    to: function(f){ return (f - 32) * 5/9; },
    aliases: ['fahrenheit']
  },
  c: {
    from: function(c){ return c; },
    to: function(c){ return c; },
    aliases: ['celcius', 'centigrade']
  }
};
