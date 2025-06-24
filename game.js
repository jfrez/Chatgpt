const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
let playerX = 0;
let playerY = 0;
const speed = 4;
const tileSize = 512;

function mulberry32(a) {
  return function() {
    var t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function getRandom(gx, gy) {
  const seed = (gx * 374761393 + gy * 668265263) & 0xffffffff;
  return mulberry32(seed);
}

function handleKey(e) {
  switch (e.key) {
    case 'ArrowUp':
    case 'w':
    case 'W':
      playerY -= speed;
      break;
    case 'ArrowDown':
    case 's':
    case 'S':
      playerY += speed;
      break;
    case 'ArrowLeft':
    case 'a':
    case 'A':
      playerX -= speed;
      break;
    case 'ArrowRight':
    case 'd':
    case 'D':
      playerX += speed;
      break;
  }
}

document.addEventListener('keydown', handleKey);

function draw() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const offsetX = playerX - canvas.width / 2;
  const offsetY = playerY - canvas.height / 2;

  const startGX = Math.floor(playerX / tileSize) - 1;
  const startGY = Math.floor(playerY / tileSize) - 1;
  const endGX = startGX + Math.ceil(canvas.width / tileSize) + 2;
  const endGY = startGY + Math.ceil(canvas.height / tileSize) + 2;

  for (let gx = startGX; gx < endGX; gx++) {
    for (let gy = startGY; gy < endGY; gy++) {
      const rng = getRandom(gx, gy);
      const objects = 5;
      for (let i = 0; i < objects; i++) {
        const x = (gx * tileSize + rng() * tileSize) - offsetX;
        const y = (gy * tileSize + rng() * tileSize) - offsetY;
        const isPlanet = rng() > 0.8;
        const size = isPlanet ? rng() * 20 + 5 : 1.5;
        ctx.beginPath();
        ctx.fillStyle = isPlanet ? `hsl(${rng() * 360},60%,50%)` : 'white';
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
  requestAnimationFrame(draw);
}

draw();
