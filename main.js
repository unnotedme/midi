function playSound (seletorAudio) {
    const element = document.querySelector(seletorAudio);

    if (element && element.localName === 'audio') {
        element.play();
    }
    else {
        console.log('element not found or invalid selector');
    }

}

const keyList = document.querySelectorAll('.key');

for (let counter = 0; counter < keyList.length; counter++) {

    const key = keyList[counter];
    const instrument = key.classList[1];
    const idAudio = `#sound_${instrument}`;

    key.onclick = function () {
        playSound(idAudio);
    }

    key.onkeydown = function (evento) {

        if (evento.code === 'space' || evento.code === 'enter') {
            key.classList.add('active');
        }

    }

    key.onkeyup = function () {
        key.classList.remove('active');
    }

}