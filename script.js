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
  var currIndex=0

  this.name = name

  this.getName = function() {
    return this.name
  }

  this.load = function(id) {
    title.innerText = songs[id].songTitle
    audio.src = songs[id].src
    currIndex = id
    audio.load()
    audio.play()
  }

  this.play = function() {
    audio.play()
  }

  this.pause = function() {
    audio.pause()
  }
  this.stop = function() {
    audio.pause()
    audio.currentTime = 0
  }

  this.next = function() {
    currIndex++
    if (currIndex >= songs.length) {
      currIndex = 0
    }
    this.load(currIndex)
  }

  this.previous = function() {
    currIndex--
    if (currIndex == -1) {
      currIndex = songs.length - 1
    }
    this.load(currIndex)
  }

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
var i =0;
var songIndex = i

indexSongs.forEach(function(){
  var elem = indexSongs[i]
  elem.addEventListener('click', function() {
    var index = elem.getAttribute('data-index')
    songIndex = index
    player.load(index)
  })
  i++;
})

var nextButton = document.querySelector('.next')
nextButton.addEventListener('click', function() {
  player.next();
})

var previousButton = document.querySelector('.previous')
previousButton.addEventListener('click', function() {
  player.previous();
})
