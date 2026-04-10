'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

// my code below
const squareForBox = document.querySelector('#boxes');
const inputArea = document.querySelector('input')
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

// Actions
createBtn.addEventListener('click', evt => {
  const val = parseInt(inputArea.value);

  if (val >= 1 && val <= 100) {
    createBoxes(val);
  };

  inputArea.value = '';
});

destroyBtn.addEventListener('click', destroyBoxes);

// Functions
function createBoxes(amount) {
  squareForBox.innerHTML = '';
  let size = 30;

  for (let n = amount; n > 0; n--) {
    const tempDiv = document.createElement('div');

    tempDiv.style.width = `${size}px`;
    tempDiv.style.height = `${size}px`;
    tempDiv.style.backgroundColor = getRandomHexColor();
    tempDiv.style.marginBottom = '3px';
    
    size += 10;
    squareForBox.append(tempDiv);
  };
};

function destroyBoxes() {
  squareForBox.innerHTML = '';
};