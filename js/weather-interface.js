var Weather = require('./../js/weather.js').weatherModule;

function displayHumidity(city, humidityData) {
  $('.humidity').text('The humidity in ' + city + ' is ' + humidityData + '%');
}

function displayTemperature(city, tempData, scale) {
  $('.temperature').text('The temperature in ' + city + ' is ' + tempData + ' degrees ' + scale);
}

function displayWindDifferences(city1, city2, city1Wind, city2Wind, windDifference) {
  $('.winds').text('The wind speed in ' + city1 + ' is ' + city1Wind + '. The wind speed in ' + city2 + ' is ' + city2Wind + '. The difference between the two is ' + windDifference + '.')
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

  $('#windDifference').click(function() {
    var city1 = $('#city1').val();
    $('#city1').val("");
    var city2 = $('#city2').val();
    $('#city2').val("");

    Weather.compareWindSpeeds(city1, city2, displayWindDifferences);
  });
});
