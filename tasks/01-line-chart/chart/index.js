import AxisX from './axis-x';
import AxisY from './axis-y';

export default function getCanvas(
  axisType = 'X',
  options = {},
  size = [500, 500],
) {
  const canvas = document.createElement('canvas');
  [canvas.height, canvas.width] = size;
  const ctx = canvas.getContext('2d');
  const translateProps =
    axisType === 'Y' ? [canvas.width / 2, 0] : [0, canvas.height / 2];
  const AxisVar = axisType === 'Y' ? AxisY : AxisX;
  ctx.translate(...translateProps);
  const axis = new AxisVar(canvas, options);
  axis.render();
  return canvas;
}

export function renderTestSample(root, title = '', options = {}) {
  const h1 = document.createElement('h1');
  h1.className = 'container__span';
  h1.textContent = title;
  const canvases = ['X', 'Y'].map((type) => getCanvas(type, options));
  root.append(h1, ...canvases);
}
