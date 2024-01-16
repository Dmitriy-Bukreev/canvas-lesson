import AxisX from './axis-x';
import AxisY from './axis-y';

class LineChart {
  constructor(canvas, axisXSettings = {}, axisYSettings = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }
}

export default LineChart;
