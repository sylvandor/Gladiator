const size = 700
const side = size / 25;
const angle = 2 * Math.PI / 6;
const center = [size / 2 - side, size / 2 - side / 4];

const dirAngle = 60 * (Math.PI / 180)
const halfAngle = dirAngle / 2;

// Draw Grid
function drawHexagon(x, y) {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  ctx.beginPath();
  for (var i = 0; i < 6; i++) {
    ctx.lineTo(x + side * Math.cos(angle * i), y + side * Math.sin(angle * i));
  }
  ctx.closePath();
  ctx.stroke();
}

export const drawGrid = () => {
  for (let y = side; y + side * Math.sin(angle) < size; y += side * Math.sin(angle)) {
    for (let x = side, j = 0; x + side * (1 + Math.cos(angle)) < size; x += side * (1 + Math.cos(angle)), y += (-1) ** j++ * side * Math.sin(angle)) {
      drawHexagon(x, y);
    }
  }
}

const cubeToCart = (cube) => {
  const x = 3 / 2 * side * cube.q + center[0];
  const y = Math.sqrt(3) * side * (cube.q / 2 + cube.r) + center[1];

  return [x, y]
}

// Draw Gladiator on grid
export const drawGladiator = (gladiator, coord, dir) => {
  const [x, y] = cubeToCart(coord);

  drawNumber(gladiator, x, y);
  drawPos(x, y);
  drawDirection(x, y, dir);
}

const drawNumber = (gladiator, x, y) => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  ctx.font = `${side/1.5}px Georgia`;
  ctx.fillText(gladiator, x - side/5, y + side/9);
}

const drawPos = (x, y) => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.arc(x, y, side / 2, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
}

const drawDirection = (x, y, dir) => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const dirAngle = angle * (dir - 1) - halfAngle;

  ctx.beginPath();
  ctx.lineTo(x + side / 2 * Math.cos(dirAngle), y + side / 2 * Math.sin(dirAngle));
  ctx.lineTo(x + side * Math.cos(dirAngle), y + (side - side / 8) * Math.sin(dirAngle));
  ctx.stroke();
  ctx.closePath();
}

// Clear map for redraw
export const clear = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
