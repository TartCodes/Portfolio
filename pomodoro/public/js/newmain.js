const progressBar = document.querySelector(".outerRing"),
      minElem = document.querySelector("#minutes"),
      secElem = document.querySelector("#seconds"),
      start = document.querySelector("#stsp"),
      stop = document.querySelector("#stsp"),
      setting = document.querySelector("#setting"),
      reset = document.querySelector("#reset");
    
let minutes = document.querySelector("#minutes").innerHTML,
    seconds = document.querySelector("#seconds").innerHTML,
    progress = null,
    timerStart = 0,
    timerEnd = parseInt(minutes) * 60 + parseInt(seconds),
    speed = 1000,
    degTravel = 360 / progressEnd,
    toggleSettings = false,
    secRem = 0,
    minRem = 0,
    running = false;

class Clock {
  constructor(min, sec) {
    this.min = min;
    this.sec = sec;    
    this.running = false;
  }

  timerTrack() {
    timerStart++

    secRem = Math.floor((timerEnd - timerStart) % 60)
    minRem = Math.floor((timerEnd - timerStart) / 60);
  }

  start() {
    //begins the countdown
    if (!this.running) {
      progress = setInterval(timerTrack, speed);
      running = true;
    }
  }

  stop() {
    //stops the countdown
  }

  settings() {
    //interact with the cogwheel (maybe get rid cog?)
  }

  reset() {
    //reset timer to default time or inputted time
    clock = new Clock(min, sec);
  }
}
let clock = new Clock(25, 0);
