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
}

export default Snowfall;
