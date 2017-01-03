function Temperature() {}

Temperature.convertToCelcius = function(temperatureKelvin) {
  return temperatureKelvin - 273.15;
};

Temperature.convertToFahrenheit = function(temperatureKelvin) {
  return ((temperatureKelvin - 273.15) * 9 / 5 +32);
};

exports.temperatureModule = Temperature;
