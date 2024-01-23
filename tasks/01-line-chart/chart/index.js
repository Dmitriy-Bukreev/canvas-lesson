import AxisX from './axis-x';
import AxisY from './axis-y';

function getCanvas(axisType = 'X', options = {}) {
  const canvas = document.createElement('canvas');
  canvas.className = 'canvas';
  canvas.height = 500;
  canvas.width = 500;
  const ctx = canvas.getContext('2d');
  const translateProps = axisType === 'Y' ? [250, 0] : [0, 250];
  const AxisVar = axisType === 'Y' ? AxisY : AxisX;
  ctx.translate(...translateProps);
  const axis = new AxisVar(canvas, options);
  axis.render();
  return canvas;
}

function renderTestSample(root, title = '', options = {}) {
  const h1 = document.createElement('h1');
  h1.className = 'container__span';
  h1.textContent = title;
  const canvases = ['X', 'Y'].map((type) => getCanvas(type, options));
  root.append(h1, ...canvases);
}

const root = document.querySelector('.container');
renderTestSample(root, 'Ноль в начале', { from: 0, to: 3 });
renderTestSample(root, 'Ноль в конце', { from: -3, to: 0 });
renderTestSample(root, 'Ноль посередине', { from: -3, to: 3 });
renderTestSample(root, 'Только отрицательные числа', { from: -5, to: -2 });
renderTestSample(root, 'Только положительные числа', { from: 2, to: 5 });
renderTestSample(root, 'Надписи с противоположной стороны', {
  from: -10,
  to: 10,
  mirroredLabelLocation: true,
});
