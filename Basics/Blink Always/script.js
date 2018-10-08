let keyframes = [
  { fontVariationSettings: '\'wght\' 50' },
  { fontVariationSettings: '\'wght\' 200' }
];

let options = {
  iterations: Infinity,
  delay: 100,
  direction: 'alternate',
  duration: 700,
  easing: 'ease-in-out'
};

document.getElementById('blink').animate(
  keyframes,
  options
)

