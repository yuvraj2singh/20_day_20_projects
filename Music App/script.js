const play_btn = document.querySelector("#play");
const song = document.querySelector("audio");
let song_playing = false;
const range = document.querySelector("#range");
const total_duration=document.querySelector("#total_duration");
const current_play_time=document.querySelector("#current_play_time");
song.onloadedmetadata = function () {
  range.max = song.duration;
  range.value = song.currentTime;
  let total=song.duration;
  let min=(total/60).toFixed(0);
  let secs=(total%60).toFixed(0);
  total_duration.innerHTML=min+":" +secs;
  
};

play_btn.addEventListener("click", () => {
  if (!song_playing) {
    song.play();
    song_playing = true;
    play_btn.classList.remove("fa-play");
    play_btn.classList.add("fa-pause");
  } else {
    song.pause();
    song_playing = false;
    play_btn.classList.add("fa-play");
    play_btn.classList.remove("fa-pause");
  }
});

if (song.play()) {
  setInterval(() => {
    range.value = song.currentTime;
  }, 500);

  setInterval(() => {
    let currtime=song.currentTime;
    let mins=Math.floor((currtime/60));
    let secs=Math.ceil((currtime%60));
    if(secs<10){
        secs="0"+secs;
    }
    if(secs==60){
      secs="00";
      mins++;
    }
    current_play_time.innerHTML=mins+":"+secs;
    if(current_play_time.innerHTML==total_duration.innerHTML){
      play_btn.classList.add("fa-play");
      play_btn.classList.remove("fa-pause");
      
    }
  }, 1000);
}

range.onchange= function(){
    song.play();
    song.currentTime=range.value;
    song_playing = true;
    play_btn.classList.remove("fa-play");
    play_btn.classList.add("fa-pause");
}

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (event.key == "Space" || event.key === " ") {
    if (song.paused) {
      song.play();
      song_playing = true;
      play_btn.classList.remove("fa-play");
      play_btn.classList.add("fa-pause");
    } else {
      song.pause();
      song_playing = false;
      play_btn.classList.add("fa-play");
      play_btn.classList.remove("fa-pause");
    }
  }
});
