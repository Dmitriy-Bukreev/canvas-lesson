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
  callback = () => {
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;
  };

  unboxing = ({
    amount = 500,
    minSize = 10,
    maxSize = 30,
    fallSpeed = 10,
  } = {}) => {
    this.snowflakeSettings = { amount, minSize, maxSize, fallSpeed };
  };

  constructor(root = document.body, snowflakeSettings = {}) {
    /** @type {HTMLElement} */
    this.root = root;
    /** @type {HTMLCanvasElement} */
    this.canvas = document.createElement('canvas');
    this.root.append(this.canvas);
    /** @type {CanvasRenderingContext2D} */
    this.ctx = this.canvas.getContext('2d');
    this.canvas.className = 'canvas-snowfall';
    /** @type {Snowflake[]} */
    this.snowflakes = [];
    this.observer = new ResizeObserver(this.callback);
    this.observer.observe(this.canvas);
    this.unboxing(snowflakeSettings);
  }

  add() {
    if (this.snowflakes.length >= this.snowflakeSettings.amount) return;
    this.snowflakes.push(
      new Snowflake(
        this.ctx,
        randInt(0, this.canvas.width),
        0,
        randInt(this.snowflakeSettings.minSize, this.snowflakeSettings.maxSize),
      ),
    );
  }

  update() {
    this.snowflakes.forEach((snowflake) => {
      snowflake.moveBy(0, this.getSnowflakeSpeed(snowflake));
    });
  }

  remove() {
    this.snowflakes = this.snowflakes.filter(
      (snowflake) => snowflake.y <= this.canvas.height,
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

  lifecycle = () => {
    this.add();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.update();
    this.remove();
    requestAnimationFrame(this.lifecycle);
  };
}

export default Snowfall;
