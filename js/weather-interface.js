var Weather = require('./../js/weather.js').weatherModule;

function displayHumidity(city, humidityData) {
  $('.humidity').text('The humidity in ' + city + ' is ' + humidityData + '%');
}

function displayTemperature(city, tempData, scale) {
  $('.temperature').text('The temperature in ' + city + ' is ' + tempData + ' degrees ' + scale);
}

$(document).ready(function(){
  $('#getHumidity').click(function(){

    var city = $('#location').val();
    $('#location').val("");

    Weather.getHumidity(city, displayHumidity);
  });

  $('#getTemperature').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    var scale = $('#scale').val();

    Weather.getTemperature(city, displayTemperature, scale);
  });
});
