function playSoundByKeyboard(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function playSoundByClick(e) {
    // const keyValue = this.dataset.key;
    const audio = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
    const key = document.querySelector(`.key[data-key="${this.dataset.key}"]`);
    if (!key) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

// intetersting use of 'this' keyword
function removeTransition(e) {
    // if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSoundByKeyboard);
// for clicks :-
keys.forEach(key => key.addEventListener('click', playSoundByClick));