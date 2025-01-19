'use strict';

// Elementary variables to shorten the link between the CSS parameters and functions affecting them through .addEventListener('click') in the JavaScript

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// After clicking on the named button the CSS class for removing the hidden parameters is activated and in the effect the modal becomes visible in the HTML / UI
const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// To activate the CSS state of class .colse-modal once the X button is hit
const closeModal = function () {
  console.log('button shut');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// loop to apply openModal function after a CLICK to > 1 buttons in the HTML
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Condition 1) If ESC on keyboard is hit => close the modal & overlay
// Condition 2) If Modal = ON (not hidden) => execute this action/ instruction
document.addEventListener('keydown', function (event) {
  console.log(event.key);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
