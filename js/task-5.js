'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

// my code below
const bodyTag = document.querySelector('body');
const spanTag = document.querySelector('.color');
const btnTag = document.querySelector('.change-color');

btnTag.addEventListener('click', evt => {
  const color = getRandomHexColor();

  bodyTag.style.backgroundColor = color;
  spanTag.textContent = color;
});