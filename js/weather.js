var apiKey = require('./../.env').apiKey;

function Weather() {}

Weather.getHumidity = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
  .then(function(response) {
  displayFunction(city, response.main.humidity);
  })
  .fail(function(error){
    $('.humidity').text(error.responseJSON.message);
  });
}

exports.weatherModule = Weather;
