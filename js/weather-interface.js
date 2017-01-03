var Weather = require('./../js/weather.js').weatherModule;

function displayHumidity(city, humidityData) {
  $('.humidity').text('The humidity in ' + city + ' is ' + humidityData + '%');
}

$(document).ready(function(){
  $('#weatherLocation').click(function(){

    var city = $('#location').val();
    $('#location').val("");

    Weather.getHumidity(city, displayHumidity);
  });
});
