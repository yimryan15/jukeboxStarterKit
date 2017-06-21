var songs = [
  {
    songTitle: "I'm The One - DJ Khalid",
    src: "./audio_files/imtheone.mp4"
  },
  {
    songTitle: "Despacito - Luis Fonsi & Daddy Yankee ft. Justin Bieber",
    src: "./audio_files/Despacito.mp4"
  },
  {
    songTitle: "Closer - Chainsmokers",
    src: "./audio_files/closer.mp4"
  }
]

var title = document.querySelector('#title')
var actions = ['play', 'pause', 'stop'];
var source = document.getElementById('source-song')

function Jukebox(name) {
  var audio = document.getElementById('myAudio')


  this.name = name;

  this.getName = function() {
    return this.name;
  }

  this.play = function(id) {
    title.innerText = songs[id].songTitle
    audio.src = songs[id].src
    audio.load()
    audio.play()
  }
  this.pause = function() {
    audio.pause()
  }
  this.stop = function() {
    audio.pause();
    audio.currentTime = 0;
  }

  // this.load = function(track) {
  //   var title = document.querySelector('#title')
  //   title.innerText = songs[track].songTitle
  //   source.src = songs[track].src
  //   audio.load();
  // }
}

var player = new Jukebox("Ryan's Jukebox");

var getActionBtn = function(type) {
  var elem = document.querySelector('[data-action="' + type + '"]');
  elem.addEventListener('click', function(){
    player[type]();
  })
}

var len = actions.length;
for(var i = 0; i < len; i++) {
  getActionBtn(actions[i]);
}

var indexSongs = document.querySelectorAll('.songs')

// for (var i = 0; i < indexSongs.length; i++) {
//   var elem = indexSongs[i]
//   elem.addEventListener('click', function() {
//     var index = elem.getAttribute('data-index')
//     player.play(index)
//   })
// }

var i =0;
indexSongs.forEach(function(){
  var elem = indexSongs[i]
  elem.addEventListener('click', function() {
    var index = elem.getAttribute('data-index')
    player.play(index)
  })
  i++;
})

// function loadSong1() {
//   title.innerText = "I'm The One - DJ Khalid";
//   document.getElementById("source-song").src ="./audio_files/imtheone.mp4";
//   document.getElementById('myAudio').load();
// }

// var song1 = document.querySelector('.song1')
// song1.onclick = function() {
//   player.load(0);
// }

// function loadSong2() {
//   title.innerText = "Despacito - Luis Fonsi & Daddy Yankee ft. Justin Bieber";
//   document.getElementById("source-song").src ="./audio_files/Despacito.mp4";
//   document.getElementById('myAudio').load();
// }

// var song2 = document.querySelector('.song2')
// song2.onclick = function() {
//   player.load(1);
// }

// function loadSong3() {
//   title.innerText = "Closer - Chainsmokers";
//   var musicSource = document.getElementById("source-song").src ="./audio_files/closer.mp4";
//   var audio = document.getElementById('myAudio').load();
// }

// var song3 = document.querySelector('.song3')
// song3.onclick = function() {
//   player.load(2);
// }
