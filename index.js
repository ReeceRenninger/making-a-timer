let durationInput = document.getElementById('duration');
let startButton = document.getElementById('start');
let pauseButton = document.getElementById('pause');
let circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let currentOffset = 0;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('timer has started!');
  },
  onTick() {
    circle.setAttribute('stroke-dashoffset', currentOffset )
    currentOffset = currentOffset - 1;
  },
  onComplete() {
    console.log('timer is done');
  }
});

