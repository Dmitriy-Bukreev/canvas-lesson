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
    this.gradient = this.ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      this.radius,
    );
    this.gradient.addColorStop(1, 'rgba(255, 255, 255, 0%)');
    this.gradient.addColorStop(0, 'rgba(255, 255, 255, 100%)');
    this.ctx.fillStyle = this.gradient;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
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
