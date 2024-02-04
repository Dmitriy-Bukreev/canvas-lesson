import AxisX from './axis-x';
import AxisY from './axis-y';

class LineChart {
  constructor(canvas, { axisXSettings = {}, axisYSettings = {} } = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.axisX = new AxisX(canvas, axisXSettings);
    this.axisY = new AxisY(canvas, axisYSettings);
  }

  render() {
    this.ctx.save();
    this.ctx.translate(0, this.axisY.zeroPos);
    this.axisX.render();
    this.ctx.restore();
    this.ctx.save();
    this.ctx.translate(this.axisX.zeroPos, 0);
    this.axisY.render();
    this.ctx.restore();
  }
}

export default LineChart;
