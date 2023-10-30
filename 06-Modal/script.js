'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');
const btns = document.querySelectorAll('.show-modal');

function close() {
  overlay.className = 'overlay hidden';
  modal.className = 'modal hidden';
}

btns.forEach(btn =>
  btn.addEventListener('click', function () {
    overlay.className = 'overlay';
    modal.className = 'modal';
  })
);

btn.addEventListener('click', close);

overlay.addEventListener('click', close);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      close();
    }
  }
  console.log(event);
});
