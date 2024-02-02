import Axis from './axis';

class AxisY extends Axis {
  constructor(canvas, settings) {
    super(canvas, settings);
    this.labels.reverse();
    this.generateRenderParams(this.canvas.height, settings.step);
  }

  render() {
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(0, this.canvas.height);
    this.ctx.stroke();

    this.ctx.textBaseline = 'middle';
    this.ctx.textAlign = this.mirroredLabelLocation ? 'right' : 'left';
    this.labels.forEach((label, index) => {
      if (label === this.axisStart) return;
      const pos = this.dashInterval * index + this.dashStart;
      this.ctx.beginPath();
      this.ctx.moveTo(-this.dashLength / 2, pos);
      this.ctx.lineTo(this.dashLength / 2, pos);
      this.ctx.stroke();

      const textX = this.mirroredLabelLocation
        ? -this.labelOffset
        : this.labelOffset;
      const textY = pos;
      this.ctx.fillText(label, textX, textY);
    });
  }
}

export default AxisY;
