import randInt from '@utils/randInt';
import Snowflake from './snowflake';
import './snowfall.css';

class Snowfall {
  /**
   * @typedef {Object} SnowflakeSettings
   * @property {number} [SnowflakeSettings.amount]
   * @property {number} [SnowflakeSettings.minSize]
   * @property {number} [SnowflakeSettings.maxSize]
   * @property {number} [SnowflakeSettings.fallSpeed]
   */

  /**
   *
   * @param {HTMLElement} [root] HTML element to which canvas elemnt is attached, defaults to `<body>`
   * @param {SnowflakeSettings} [snowflakeSettings]
   */
  constructor(root = document.body, snowflakeSettings = {}) {
    /** @type {HTMLElement} */
    this.root = root;
    /** @type {HTMLCanvasElement} */
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'canvas-snowfall';
    /** @type {CanvasRenderingContext2D} */
    this.ctx = this.canvas.getContext('2d');
    this.canvas.className = 'canvas-snowfall';
    /** @type {Snowflake[]} */
    this.snowflakes = [];
    /** @type {ResizeObserver | null} */
    this.observer = null;
    /** @type {SnowflakeSettings} */
    this.saveSnowflakeSettings(snowflakeSettings);

    this.root.append(this.canvas);
    this.resizeCanvas();
    this.initObserver();
  }

  initObserver() {
    this.observer = new ResizeObserver(this.resizeCanvas);
    this.observer.observe(this.canvas);
  }

  resizeCanvas = () => {
    this.canvas.height = this.canvas.clientHeight;
    this.canvas.width = this.canvas.clientWidth;
  };

  /**
   *
   * @param {SnowflakeSettings} snowflakeSettings
   */
  saveSnowflakeSettings({
    amount = 200,
    minSize = 1,
    maxSize = 10,
    fallSpeed = 4,
  } = {}) {
    this.snowflakeSettings = { amount, minSize, maxSize, fallSpeed };
  }

  add() {
    while (this.snowflakes.length < this.snowflakeSettings.amount) {
      const y = randInt(-this.canvas.height, 0);
      const x = randInt(0, this.canvas.width);
      const radius = randInt(
        this.snowflakeSettings.minSize,
        this.snowflakeSettings.maxSize,
      );
      this.snowflakes.push(new Snowflake(this.ctx, x, y, radius));
    }
  }

  update() {
    this.snowflakes.forEach((snowflake) => {
      snowflake.moveBy(0, this.getSnowflakeSpeed(snowflake));
    });
  }

  remove() {
    this.snowflakes = this.snowflakes.filter((snowflake) =>
      this.isVisible(snowflake),
    );
  }

  /**
   * Calculates snowflake speed
   * @param {Snowflake} snowflake
   * @returns {number}
   */
  getSnowflakeSpeed(snowflake) {
    return (
      (snowflake.radius /
        (this.snowflakeSettings.maxSize - this.snowflakeSettings.minSize)) *
      this.snowflakeSettings.fallSpeed
    );
  }

  /**
   * Checks if snowflake is within canvas boundaries
   * @param {Snowflake} snowflake
   * @returns {boolean}
   */
  isVisible(snowflake) {
    return snowflake.y - snowflake.radius < this.canvas.height;
  }

  lifecycle = () => {
    this.add();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.update();
    this.remove();

    requestAnimationFrame(this.lifecycle);
  };
}

export default Snowfall;
