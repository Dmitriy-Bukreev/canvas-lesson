import Axis from './axis';

class AxisX extends Axis {
  constructor(canvas, settings) {
    super(canvas, settings);
    this.generateRenderParams(this.canvas.width, settings.step);
  }

  render() {
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(this.canvas.width, 0);
    this.ctx.stroke();

    this.ctx.textAlign = 'right';
    this.ctx.textBaseline = this.mirroredLabelLocation ? 'top' : 'bottom';
    this.labels.forEach((label, index) => {
      if (label === this.axisStart) return;
      const pos = this.dashInterval * index + this.dashStart;
      this.ctx.beginPath();
      this.ctx.moveTo(pos, -this.dashLength / 2);
      this.ctx.lineTo(pos, this.dashLength / 2);
      this.ctx.stroke();

      const textMetrics = this.ctx.measureText(Math.abs(label));
      const textX = pos + textMetrics.width / 2;
      const textY = this.mirroredLabelLocation
        ? this.labelOffset
        : -this.labelOffset;
      this.ctx.fillText(label, textX, textY);
    });
  }
}

export default AxisX;
