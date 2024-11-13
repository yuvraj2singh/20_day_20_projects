const time = document.querySelector(".time");
const secs = document.querySelector("#secs");
const mins = document.querySelector("#mins");
const hours = document.querySelector("#hour");
const play = document.querySelector("#play");
const selection = document.querySelector("#selection");
const options = document.querySelectorAll("#selection option");
const reset = document.querySelector("#reset");




let isWorking = false;
let count = 0;
let min = 0;
let hour = 0;
let IntervalId;

play.addEventListener("click", () => {
  if (!isWorking) {
    IntervalId = setInterval(() => {
      count++;
      if (count == 60) {
        min++;
        count = 0;
      }
      if (min == 60) {
        hour++;
        min = 0;
      }
      secs.innerHTML = count < 10 ? "0" + count : count;
      mins.innerHTML = min < 10 ? "0" + min : min;
      hours.innerHTML = hour < 10 ? "0" + hour : hour;
    }, 1000);
    play.innerHTML = `<i class="fa-solid fa-pause">`;
    isWorking = true;
  } else {
    clearInterval(IntervalId);
    isWorking = false;
    play.innerHTML = `<i class="fa-solid fa-play">`;
  }
});

reset.addEventListener("click", () => {
  secs.innerHTML = "00";
  mins.innerHTML = "00";
  hours.innerHTML = "00";
  count = 0;
  clearInterval(IntervalId);
  play.innerHTML = `<i class="fa-solid fa-play">`;
});



