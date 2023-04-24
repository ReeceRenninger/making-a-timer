let durationInput = document.getElementById('duration');
let startButton = document.getElementById('start');
let pauseButton = document.getElementById('pause');

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('timer has started!');
  },
  onTick() {
    console.log('timer is counting down!')
  },
  onComplete() {
    console.log('timer is done');
  }
});

