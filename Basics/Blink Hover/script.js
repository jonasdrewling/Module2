function onDocumentReady() {
  document
  .getElementById('blink')
  .addEventListener("pointerover", isBlinking);
}

function isBlinking(e) {
  console.log('blinking');

  const keyframes = [
    { fontVariationSettings: '\'wght\' 50' },
    { fontVariationSettings: '\'wght\' 200' }
  ];

  const options = {
    iterations: Infinity,
    delay: 100,
    direction: 'alternate',
    duration: 700,
    easing: 'ease-in-out'
  };

  let el = e.target;

  let player = el.animate(keyframes, options);

  handleStop(el, player);
}

function handleStop(el, player) {
  el.addEventListener(
    'pointerout',
    () => {
      console.log('Stopping animation');
      player.cancel();
    },
    { once: true }
  );
}

if (document.readyState != 'loading') {
  onDocumentReady();
} else {
  document.addEventListener('DOMContentLoaded', onDocumentReady);
}