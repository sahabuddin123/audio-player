// Select Container
let container = document.querySelector(".container");
// select music image
let musicImg = document.querySelector(".img-area img");
// select music name
let musicName = document.querySelector(".song-details .name");
// select artist name
let musicArtist = document.querySelector(".song-details .artist");
// select play-pause button
let playPauseBtn = document.querySelector(".play-pause");
// select revious button
let prevBtn = document.querySelector("#prev");
// select next buttton
let nextBtn = document.querySelector("#next");
// select main auto tag
let mainAudio = document.querySelector("#main-audio");
// select progress area
let progressArea = document.querySelector(".progress-area");
// select progress bar
let progressBar = document.querySelector(".progress-bar");
// select music list
let musicList = document.querySelector(".music-list");
// select more music list
let moreMusicBtn = document.querySelector("#more-music");
// select more music list close
let closemoreMusic = document.querySelector("#close");

//get music index number 
let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
// default music paused true
isMusicPaused = true;

//when rload widow
window.addEventListener("load", ()=>{
    loadMusic(musicIndex);
    playingSong(); 
});

// Load Music 
function loadMusic(indexNumb){
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicImg.src = `assets/img/${allMusic[indexNumb - 1].src}.jpg`;
    mainAudio.src = `assets/song/${allMusic[indexNumb - 1].src}.mp3`;
  }

// Play Music
function playMusic(){
    container.classList.add("paused");
    playPauseBtn.querySelector("i").innerText = "pause";
    mainAudio.play();
}

//pause music function
function pauseMusic(){
    container.classList.remove("paused");
    playPauseBtn.querySelector("i").innerText = "play_arrow";
    mainAudio.pause();
}
