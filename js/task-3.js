'use strict';

const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', evt => {
    if (evt.currentTarget.value.trim()){
        textOutput.textContent = evt.currentTarget.value.trim();
    } else {
        textOutput.textContent = 'Anonymous';
    }
});