'use strict';

const ringMain = document.querySelector('.ring_main');
const ringFooter = document.querySelector('.ring_footer');
let hue = 0;

document.addEventListener('mousemove', event => {
  hue = event.offsetX / 10 + ((event.offsetY / 10) + 1000);

  ringMain.style.filter = `hue-rotate(${hue}deg)`;
  ringFooter.style.filter = `hue-rotate(${hue - 100}deg)`;
});
