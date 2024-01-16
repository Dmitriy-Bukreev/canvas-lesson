import AxisX from './axis-x';
import AxisY from './axis-y';

const canvases = Array.from(document.querySelectorAll('.canvas'));

let canvas;
let ctx;
let axis;

canvas = canvases.at(0);
ctx = canvas.getContext('2d');
ctx.translate(0, 250);
axis = new AxisX(canvas, { from: -3, to: 0 });
axis.render();

canvas = canvases.at(1);
ctx = canvas.getContext('2d');
ctx.translate(250, 0);
axis = new AxisY(canvas, { from: -10, to: 10 });
axis.render();

canvas = canvases.at(2);
ctx = canvas.getContext('2d');
ctx.translate(0, 250);
axis = new AxisX(canvas, { from: -7, to: -3 });
axis.render();
