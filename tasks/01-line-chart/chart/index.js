import AxisX from './axis-x';
import AxisY from './axis-y';
import LineChart from './line-chart';

export function getCanvasWithAxis(
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

export function getCanvasWithChart(
  options = {},
  plotOptions = [],
  size = [500, 500],
) {
  const canvas = document.createElement('canvas');
  [canvas.height, canvas.width] = size;
  const chart = new LineChart(canvas, options);

  chart.render();
  plotOptions.forEach(({ data, lineSettings }) =>
    chart.plot(data, lineSettings),
  );
  return canvas;
}
