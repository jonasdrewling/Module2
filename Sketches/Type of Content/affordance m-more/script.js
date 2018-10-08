var element = document.getElementById("watchme");
element.addEventListener("click", onclick);
element.addEventListener("pointerover", onPointerOver);
element.addEventListener("pointerout", onPointerOut);

function onclick() {
console.log('clicked');
element.className = "slideover";

}

function onPointerOver() {
  element.innerHTML = "more...";
  element.className = "slidein";
 
}

function onPointerOut() {
  element.innerHTML = "m.";
 
}


