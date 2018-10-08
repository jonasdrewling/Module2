/*

document
  .getElementById("blink")
  .addEventListener("pointerover", hover, expWord);
// Constant weight-change on the letter M

let keyframes = [
  { fontVariationSettings: "\"wght\" 50" },
  { fontVariationSettings: "\"wght\" 200" }
];

let options = {
  iterations: Infinity,
  delay: 100,
  direction: "alternate",
  duration: 700,
  easing: "ease-in-out"
};

document.getElementById("blink").animate(
  keyframes,
  options
)

// When hovering over M expand to full word

function hover(e) {

  console.log("expanding");

  //document.getElementById("blink").innerHTML="More";

  const keyframes = [
    { fontVariationSettings: "\"wght\" 50" },
    { fontVariationSettings: "\"wght\" 200" }
  ];

  const options = {
    iterations: Infinity,
    delay: 100,
    direction: "alternate",
    duration: 700,
    easing: "ease-in-out"
  };


  let el = e.target;

  let player = el.animate(keyframes, options);

  handleStop(el, player);
}

function handleStop(el, player) {
  el.addEventListener(
    "pointerout",
    () => {
      console.log("Stopping animation");
      player.cancel();
    },
    { once: true }
  );
}

function expWord() {
  if (document.getElementById("blink").innerHTML === "M") {
    document.getElementById("blink").innerHTML = "More";
  } else {
    document.getElementById("blink").innerHTML = "M";
  }
}

*/