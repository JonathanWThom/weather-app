var apiKey = require('./../.env').apiKey;
var Temperature = require('./../js/temperature.js').temperatureModule;

function Weather() {}

Weather.getHumidity = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
  .then(function(response) {
  displayFunction(city, response.main.humidity);
  })
  .fail(function(error){
    $('.humidity').text(error.responseJSON.message);
  });
};

Weather.getTemperature = function(city, displayFunction, scale) {
  var returnValue;
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response){
    returnValue = parseFloat(response.main.temp);
    if (scale === 'celcius') {
      returnValue = Temperature.convertToCelcius(returnValue);
    } else if (scale === 'fahrenheit') {
      returnValue = Temperature.convertToFahrenheit(returnValue);
    } else {
      returnValue = returnValue;
    }
    displayFunction(city, returnValue, scale);
  }).fail(function(error){
    returnValue = error.responseJSON.message;
    displayFunction(city, returnValue, scale);
  });
};

exports.weatherModule = Weather;
