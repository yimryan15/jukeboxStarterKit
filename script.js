function Jukebox(name) {
  this.song = name;

  this.play = function() {
    audio.play();
  }
  this.pause =  function() {
    .pause()
  }
  this.stop =  function() {

  }
  this.rewind =  function() {

  }
  this.next =  function() {

  }
  this.prev =  function() {

  }
  this.load =  function() {

  }
}

var loadButton1 = document.querySelector('.song1')
var loadButton2 = document.querySelector('.song2')
var loadButton3 = document.querySelector('.song3')

var playButton = document.querySelector('.play')
var pauseButton = document.querySelector('.pause')
var stopButton = document.querySelector('.stop')
