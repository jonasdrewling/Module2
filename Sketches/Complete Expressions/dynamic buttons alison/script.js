var players = [];

function onDocumentReady() {
    document
    .getElementById('button1')
    .addEventListener('click', onButton1Click);
    document.getElementById('button2').addEventListener('click', onButton2Click);
}

function onButton1Click () {
    let el = document.getElementById('pangram');
    el.style.fontVariationSettings = '\'BLDB\' 1000';
}
cancelAnimation();