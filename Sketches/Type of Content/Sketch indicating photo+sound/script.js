var element = document.getElementsByClassName("flash");
document.addEventListener("pointerover", onPointerOver);
document.addEventListener("pointerout", onPointerOut);
var audio = new Audio('camerasound.wav');

const AudioContext = window.AudioContext;
const audioCtx = new AudioContext ();


function onPointerOver () {
    audio.play();
    console.log ("audio");
}

function onPointerOut () {
    audio.pause();
}