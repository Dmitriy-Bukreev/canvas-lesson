class Snowflake {
  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} initialX
   * @param {number} initialY
   * @param {number} radius
   */
  constructor(ctx, initialX, initialY, radius) {
    this.ctx = ctx;
    this.x = initialX;
    this.y = initialY;
    this.radius = radius;
  }

  render() {
    const gradient = this.ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      this.radius,
    );
    gradient.addColorStop(0, 'rgba(255, 255,255, 100%)');
    gradient.addColorStop(1, 'rgba(255, 255,255, 0%)');
    this.ctx.fillStyle = gradient;

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  /**
   *
   * @param {number} deltaX
   * @param {number} deltaY
   */
  moveBy(deltaX, deltaY) {
    this.x += deltaX;
    this.y += deltaY;
    this.render();
  }
}

export default Snowflake;
