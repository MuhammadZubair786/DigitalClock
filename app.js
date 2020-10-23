/* This file should be in a folder called `js` */

var Time = document.getElementById('time');
// var hexColor = document.getElementById('hex-color');

function Dclock() {
  var time = new Date();
  var hours = (time.getHours() % 12).toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();

  if (hours.length < 2) {
    hours = '0' + hours;
  }

  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }

  var clockStr = hours + ' : ' + minutes + ' : ' + seconds;
  var hexColorStr = '#' + hours + minutes + seconds;

  Time.innerText = clockStr;
//   hexColor.innerText= hexColorStr;
  document.body.style.backgroundColor = hexColorStr;
}

Dclock();
setInterval(Dclock, 1000);