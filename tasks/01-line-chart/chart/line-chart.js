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
    const deltaX = this.axisX.zeroPos;
    const deltaY = this.axisY.zeroPos;

    this.ctx.save();
    this.ctx.translate(0, deltaY);
    this.axisX.render();
    this.ctx.restore();

    this.ctx.save();
    this.ctx.translate(deltaX, 0);
    this.axisY.render();
    this.ctx.restore();
  }

  /**
   * @typedef {{
   *  color?: string,
   *  width?: number,
   *  cap?: "butt" | "round" | "square",
   *  join?: "round" | "bevel" | "meter"
   * }} LineSettings
   */

  /**
   * @typedef {{x: number, y: number}} Point
   * @param {Point[]?} data
   * @param {LineSettings?} lineSettings
   * @returns this
   */
  plot(data = [], lineSettings = {}) {
    const plotData = this.rescaleData(data);
    const firstPoint = plotData.at(0);
    if (!firstPoint) return this;
    this.ctx.moveTo(firstPoint.x, firstPoint.y);
    this.ctx.save();
    this.applyLineSettings(lineSettings);
    this.ctx.translate(this.axisX.zeroPos, this.axisY.zeroPos);
    this.ctx.beginPath();
    plotData.forEach((point) => {
      this.ctx.lineTo(point.x, point.y);
    });

    this.ctx.stroke();
    this.ctx.restore();
    return this;
  }

  /**
   * @typedef {{x: number, y: number}} Point
   * @param {Point[]} data
   * @returns {Point[]}
   */
  rescaleData(data = []) {
    return data.map((point) => {
      return {
        x: point.x * this.axisX.scaleFactor,
        y: -point.y * this.axisY.scaleFactor,
      };
    });
  }

  /**
   * @param {LineSettings?} lineSettings
   */
  applyLineSettings({ color = '', width = 1, cap = '', join = '' } = {}) {
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = width;
    this.ctx.lineCap = cap;
    this.ctx.lineJoin = join;
  }
}

export default LineChart;
