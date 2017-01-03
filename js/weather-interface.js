var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $('#weatherLocation').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.humidity').text('The humidity in ' + city + ' is ' + response.main.humidity + '%');
    });
  });
});
