function Jukebox(name) {
  var audio = document.getElementById('myAudio')
  this.name = name;

  this.getName = function() {
    return this.name;
  }

  this.play = function() {
    audio.play()
  }
  this.pause = function() {
    audio.pause()
  }
  this.stop = function() {
    audio.pause();
    audio.currentTime = 0;
  }
}

var player = new Jukebox("Ryan's Jukebox");

var getActionBtn = function(type) {
  var elem = document.querySelector('[data-action="' + type + '"]');
  elem.addEventListener('click', function(){
    player[type]();
  })
}

var actions = ['play', 'pause', 'stop'];
var len = actions.length;
for(var i = 0; i < len; i++) {
  getActionBtn(actions[i]);
}

function loadSong1() {
  var title = document.querySelector('#title')
  title.innerText = "I'm The One - DJ Khalid";
  document.getElementById("source-song").src ="./audio_files/imtheone.mp4";
  document.getElementById('myAudio').load();
}

var song1 = document.querySelector('.song1')
song1.onclick = function() {
  loadSong1();
}

function loadSong2() {
  var title = document.querySelector('#title')
  title.innerText = 'Despacito - Luis Fonsi & Daddy Yankee ft. Justin Bieber';
  document.getElementById("source-song").src ="./audio_files/Despacito.mp4";
  document.getElementById('myAudio').load();
}

var song2 = document.querySelector('.song2')
song2.onclick = function() {
  loadSong2();
}

function loadSong3() {
  var title = document.querySelector('#title')
  title.innerText = 'Closer - Chainsmokers';
  var musicSource = document.getElementById("source-song").src ="./audio_files/closer.mp4";
  var audio = document.getElementById('myAudio').load();
}

var song3 = document.querySelector('.song3')
song3.onclick = function() {
  loadSong3();
}
