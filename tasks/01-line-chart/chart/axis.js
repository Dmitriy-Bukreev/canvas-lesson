import generateArray from '@utils';

class Axis {
  constructor(
    canvas,
    {
      from = 0,
      to = 10,
      step = 1,
      dashLength = 10,
      labelOffset = 10,
      mirroredLabelLocation = false,
    } = {},
  ) {
    this.labels = [];
    this.axisStart = 0;
    this.dashInterval = 0;
    this.axisStart = 0;
    this.canvas = canvas;
    this.labelOffset = labelOffset;
    this.ctx = canvas.getContext('2d');
    // init labels and axis start
    this.generateAxisParams(from, to, step);
    this.dashLength = dashLength;
    this.mirroredLabelLocation = mirroredLabelLocation;
  }

  generateAxisParams(from = 0, to = 0, step = 1) {
    if ((from > 0 && to > 0) || (from < 0 && to < 0)) {
      this.labels = generateArray(from, to + step, step);
      this.axisStart = from < 0 ? to : from;
      return;
    }

    // Сгенерировать отрицательные числа
    const labelsNegative = generateArray(0, -from + step, step)
      .map((val) => -val)
      .reverse();
    // Удалить ноль с конца массива
    labelsNegative.pop();
    // Сгенерировать положительные числа
    const labelsPositive = generateArray(0, to + step, step);
    this.labels = [...labelsNegative, ...labelsPositive];
  }

  get from() {
    return this.labels.at(0);
  }

  get to() {
    return this.labels.at(-1);
  }

  generateRenderParams(size) {
    this.dashInterval =
      size /
      (this.from !== 0 && this.to !== 0 && this.axisStart === 0
        ? this.labels.length + 1
        : this.labels.length);
    this.dashStart = this.labels[0] === this.axisStart ? 0 : this.dashInterval;
  }

  get zeroPos() {
    const zeroIndex = this.labels.indexOf(this.axisStart);
    if (zeroIndex === 0) return 0;
    return (zeroIndex + 1) * this.dashInterval;
  }
}

export default Axis;
