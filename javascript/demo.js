/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#707070',
    lineColor: '#707070',
    particleRadius: 4,
    lineWidth: 0.001,
    minSpeedX: 0.1,
    maxSpeedX: 1,
    minSpeedY: 0.1,
    maxSpeedY: 1,
  });
}, false);


/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/