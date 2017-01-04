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

Weather.compareWindSpeeds = function(city1, city2, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city1 + '&appid=' + apiKey).then(function(response){
    var city1Wind = parseFloat(response.wind.speed);
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city2 + '&appid=' + apiKey).then(function(response){
    var city2Wind = parseFloat(response.wind.speed);
    var windDifference = Math.abs(city1Wind - city2Wind);
    displayFunction(city1, city2, city1Wind, city2Wind, windDifference);
    }).fail(function(error){
      $('.winds').text(error.responseJSON.message);
    });
  }).fail(function(error){
    $('.winds').text(error.responseJSON.message);
  });
};

exports.weatherModule = Weather;
