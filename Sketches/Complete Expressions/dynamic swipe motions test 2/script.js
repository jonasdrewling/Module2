var players = [];

function onDocumentReady() {
    document.getElementById('gridItemLeft').addEventListener('pointerover', onPointerOver);
    document.getElementById('gridItemTop').addEventListener('pointerover', onPointer2Over);
    document.getElementById('gridItemRight').addEventListener('pointerover', onPointer3Over);
    document.getElementById('gridItemBottom').addEventListener('pointerover', onPointer4Over);
}

function onPointerOver() {
let el = document.getElementById('pangram');
const keyframes = [
    {fontVariationSettings: "'term' 0, 'wght' 200"},
    {fontVariationSettings: "'term' 0, 'wght' 50"}
];
const options = {
    fill: 'forwards',
    duration: 500,
    easing: 'ease-out'
};

let player = el.animate(keyframes, options);
players.push(player);
}

function onPointer2Over() {
    let el = document.getElementById('pangram2');
    const keyframes = [
        {fontVariationSettings: "'term' 0, 'wght' 50"},
        {fontVariationSettings: "'term' 100, 'wght' 50"}
    ];
    const options = {
        fill: 'forwards',
        duration: 500,
        easing: 'ease-out'
    };

    let player = el.animate(keyframes, options);
    players.push(player);
}

function onPointer3Over() {
    let el = document.getElementById('pangram');
    const keyframes = [
        0% {
            font-variation-settings: 'wght' 50;
            font-size: 1em;
          },
          20% {
            font-variation-settings: 'wght' 90;
            font-size: 1.3em;
          },
          40% {
            font-variation-settings: 'wght' 75;
            font-size: 1.2em;
          },
          60% {
            font-variation-settings: 'wght' 125;
            font-size: 1.4em;
          },
          80% {
            font-variation-settings: 'wght' 115;
            font-size: 1.3em;
          },
          100% {
            font-variation-settings: 'wght' 150;
            font-size: 1.5em;
          }
        }
    ];
    const options = {
        fill: 'forwards',
        duration: 500,
        easing: 'ease-out'
    };

    let player = el.animate(keyframes, options);
    players.push(player);
}

function onPointer4Over() {
    let el = document.getElementById('pangram2');
    const keyframes = [
        {fontVariationSettings: "'term' 100, 'wght' 50"},
        {fontVariationSettings: "'term' 0, 'wght' 50"}
    ];
    const options = {
        fill: 'forwards',
        duration: 500,
        easing: 'ease-out'
    };

    let player = el.animate(keyframes, options);
    players.push(player);
}
/*function onButton1Click() {
    let el = document.getElementById('pangram');
    const keyframes = [
        {fontVariationSettings: "'term' 0, 'shrp' 1, 'wght' 50"},
        {fontVariationSettings: "'term' 100, 'shrp' 100, 'wght' 50"}
    ];
    const options = {
        fill: 'forwards',
        duration: 6000,
        easing: 'ease-in-out',
        timing: 'alternate-reverse',
        iteration: 'infinite'
    };
    let player = el.animate(keyframes, options);
    players.push(player);
    //el.style.fontVariationSettings = '\'WDTH\' 100';
    //cancelAnimation();
}

/*function cancelAnimation() {
    players.forEach(p => {
        p.cancel();
    });
    players = [];
}*/

/*function onButton2Click() {
    let el = document.getElementById('pangram');
    const keyframes = [
        {fontStyle: 'normal'},
        {fontStyle: 'italic'}
       /*{ /*fontVariationSettings: "'wght' 50, 'term' 0" },
       { fontVariationSettings: "'wght' 200, 'term' 0" }*/
   /* ];
    const options = {
       
        //delay: 100,
        fill: 'forwards',
        duration: 3000,
        iteration: 'infinite',
        timing: 'alternate-reverse',
        easing: 'ease-in-out'
    };
    

    let player = el.animate(keyframes, options);
    
    players.push(player);
   
}*/

/*function onButton3PointerDown(button3, action, start, speedup) {
    let el = document.getElementById('pangram');
    var t;
    /*var repeat = function () {
        action();
        t = setTimeout(repeat, start);
        start = start / speedup;
    }
    button3.pointerdown = function() {
        repeat();
    }
    button3.pointerup = function() {
        clearTiemout(t);
    }*/

    /*const keyframes = [
        {fontVariationSettings: "'term' 0, 'wdth' 0, 'wght' 0"},
        {fontVariationSettings: "'term' 100, 'wdth' 100, 'wght' 0"}
    ];
    const options = {
        duration: 3000,
        iteration: 'infinite',
        timing: 'alternate',
        easing: 'ease-in-out'
    };

    let player = el.animate(keyframes, options);
    players.push(player);
    cancelAnimation();
    
    //onButton3PointerDown(button3, function () {}, 1000, 2);
}*/
if (document.readyState != 'loading') {
    onDocumentReady();
} else {
    document.addEventListener('DOMContentLoaded', onDocumentReady);
}