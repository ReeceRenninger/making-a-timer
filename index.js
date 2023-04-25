let durationInput = document.getElementById('duration');
let startButton = document.getElementById('start');
let pauseButton = document.getElementById('pause');
let circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration;
    console.log('timer has started!');
  },
  onTick(timeRemaining) {
    circle.setAttribute('stroke-dashoffset',
    (perimeter * timeRemaining) / duration - perimeter
    )
  },
  onComplete() {
    console.log('timer is done');
  }
});

