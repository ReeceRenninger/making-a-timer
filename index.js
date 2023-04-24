let durationInput = document.getElementById('duration');
let startButton = document.getElementById('start');
let pauseButton = document.getElementById('pause');

class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }

  start = () => {
    this.tick(); //automatically starts tick
     this.timeIteration = setInterval(this.tick, 1000); // calls tick function after eac second, set as this.name to allow access in the pause method below
    
  };

  tick = () => {
    if (this.timeRemaining <= 0){
      this.pause();
    } else {
      this.timeRemaining = this.timeRemaining - 1;
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time;
  }

  pause = () => {
    clearInterval(this.timeIteration);
  };
}

const timer = new Timer(durationInput, startButton, pauseButton);

