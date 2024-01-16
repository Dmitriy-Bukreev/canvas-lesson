import Axis from './axis';

class AxisY extends Axis {
  constructor(...args) {
    super(...args);
    this.generateRenderParams(this.canvas.height);
  }

  render() {
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(0, this.canvas.height);
    this.ctx.stroke();

    this.labels.forEach((label, index) => {
      if (label === this.axisStart) return;
      const pos = this.dashInterval * index + this.dashStart;
      this.ctx.beginPath();
      this.ctx.moveTo(-this.dashLength / 2, pos);
      this.ctx.lineTo(this.dashLength / 2, pos);
      this.ctx.stroke();

      const textMetrics = this.ctx.measureText(label);
      const textX = this.dashLength / 2;
      const textY = pos + textMetrics.fontBoundingBoxDescent / 2;
      this.ctx.fillText(label, textX, textY);
    });
  }
}

export default AxisY;
