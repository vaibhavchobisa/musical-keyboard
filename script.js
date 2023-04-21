function playSoundByKeyboard(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function playSoundByClick(e) {
    if(e.srcElement.nodeName==='KBD' || e.srcElement.nodeName==='SPAN') {
        const audio = document.querySelector(`audio[data-key="${e.srcElement.parentElement.attributes[0].nodeValue}"]`);
        const key = document.querySelector(`.key[data-key="${e.srcElement.parentElement.attributes[0].nodeValue}"]`);
        if (!key) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    }
    else if(e.srcElement.nodeName==='DIV') {
        const audio = document.querySelector(`audio[data-key="${e.srcElement.attributes[0].nodeValue}"]`);
        const key = document.querySelector(`.key[data-key="${e.srcElement.attributes[0].nodeValue}"]`);
        if (!key) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    }
}

function removeTransition(e) {
    // if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSoundByKeyboard);
// for clicks :-
keys.forEach(key => key.addEventListener('click', playSoundByClick));