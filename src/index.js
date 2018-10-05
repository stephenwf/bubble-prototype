import './main.scss';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

function drawBubble(ctx, x, width, height, fn, ratio) {
  const y = 250; // height of canvas.

  ctx.beginPath();
  ctx.moveTo(x, y);
  const angle = height * ratio;
  const endX = x + width;
  const endY = y;
  const ht = y - height;
  const x1 = angle + x;
  const x2 = (x + width) - angle;

  ctx.bezierCurveTo(x1, ht, x2, ht, endX, endY);
  if (fn) {
    fn(ctx);
  }
  ctx.fill();
}

function loop(t) {
  const percent = (500-t)/500;

  context.fillStyle = 'white';
  context.fillRect(0, 0, 500, 500);

  drawBubble(context, 0, 500*percent, 140, (ctx) => {
    ctx.fillStyle = 'red';
  }, 0.8 * percent);

  drawBubble(context, 0, 250*percent, 70, (ctx) => {
    ctx.fillStyle = 'blue';
  }, 0.8 * percent);

  drawBubble(context, 250*percent, 250*percent, 70, (ctx) => {
    ctx.fillStyle = 'orange';
  }, 0.8 * percent);

  drawBubble(context, 0, 125*percent, 30, (ctx) => {
    ctx.fillStyle = 'yellow';
  }, 0.8 * percent);

  drawBubble(context, 125*percent, 125*percent, 30, (ctx) => {
    ctx.fillStyle = 'yellow';
  }, 0.8 * percent);
}
let direction = 1;
let t= 0;
setInterval(function() {
  if (t === 0) {
    direction = 1;
  }
  if (t === 200) {
    direction = -1;
  }
  if (direction === 1) {
    t += 1;
  } else {
    t -= 1;
  }
  loop(t);
}, 16);
