import { canvas, state } from './state.js';

let shootFunc = () => {};

function onKeyDown(e) {
  switch (e.key) {
    case 'ArrowUp':
    case 'w':
    case 'W':
      state.keys.up = true;
      break;
    case 'ArrowDown':
    case 's':
    case 'S':
      state.keys.down = true;
      break;
    case 'ArrowLeft':
    case 'a':
    case 'A':
      state.keys.left = true;
      break;
    case 'ArrowRight':
    case 'd':
    case 'D':
      state.keys.right = true;
      break;
    case ' ':
      shootFunc();
      break;
  }
}

function onKeyUp(e) {
  switch (e.key) {
    case 'ArrowUp':
    case 'w':
    case 'W':
      state.keys.up = false;
      break;
    case 'ArrowDown':
    case 's':
    case 'S':
      state.keys.down = false;
      break;
    case 'ArrowLeft':
    case 'a':
    case 'A':
      state.keys.left = false;
      break;
    case 'ArrowRight':
    case 'd':
    case 'D':
      state.keys.right = false;
      break;
  }
}

export function setupInput(shoot) {
  shootFunc = shoot;
  document.addEventListener('keydown', onKeyDown);
  document.addEventListener('keyup', onKeyUp);
  canvas.addEventListener('mousemove', e => {
    state.mouseX = e.offsetX;
    state.mouseY = e.offsetY;
  });
  canvas.addEventListener('click', shootFunc);
}
