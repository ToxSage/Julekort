
function openGift() {
    var input = document.getElementById("input").value;
    var box = document.getElementById('box');
    var tore = document.getElementById('tore-img');
    var t = document.getElementById('blink');
    var jul = document.getElementById('jul');
    var music = document.getElementById('music');
    var smørbrød = document.getElementById('stjerne')
    tore.id = "tore-ani";
    box.id = "openedBox";
    music.play();
    smørbrød.id = "smørbrød";
    t.innerHTML = "Kos deg mye med familien!";
    jul.innerHTML = "God jul " + input;
    setTimeout(finishAnimations, 2250);
    var input = document.getElementById('input')
    input.id = "gone"
}

function finishAnimations() {
    var tore = document.getElementById('tore-ani')
    tore.className = 'tore-img'
    tore.id = ' '
}

function cheezburger() {
    var cheez = document.getElementById("cheezburger");
    cheez.play();
}

function navn() {
    var input = document.getElementById('input').value;
    var jul = document.getElementById('jul');
    var blink = document.getElementById('blink');
    jul.innerHTML = "Hei "+ input +", håper det går bra med deg";
    blink.innerHTML = 'ÅPNE GAVEN JEG HAR SENDT TIL DEG (PS HA PÅ LYD!)';
}