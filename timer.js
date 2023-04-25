class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }

  start = () => {
    if(this.onStart){
      this.onStart(this.timeRemaining);
    }
    this.tick(); //automatically starts tick
    this.timeIteration = setInterval(this.tick, 20); // calls tick function after each second, set as this.name to allow access in the pause method below

  };

  pause = () => {
    clearInterval(this.timeIteration);
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if(this.onComplete){
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - .02;
      if(this.onTick){
        this.onTick(this.timeRemaining);
      }
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    // toFixed formats a number using fixed-point notation, so I only allow for 2 numbers after decimal
    this.durationInput.value = time.toFixed(2);
  }

}