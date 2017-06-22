class CanvasBall {
  constructor(canvas, startX, startY, startVelX, startVelY) {
    this.x = startX || Math.random() * canvas.width;
    this.y = startY || Math.random() * canvas.height;
    this.vel = {
      x: startVelX || (Math.random() * 2) - 1,
      y: startVelY || (Math.random() * 2) - 1
    };
  }

  draw(ctxInstance) {
    ctxInstance.beginPath();
    ctxInstance.globalAlpha = 0.1;
    ctxInstance.fillStyle = '#ddd';
    ctxInstance.arc((0.5 + this.x) | 0, (0.5 + this.y) | 0, 3, 0, this.TAU, false);
    ctxInstance.fill();
  }

  update(canvasInstance) {
    if (this.x > canvasInstance.width + 50 || this.x < -50) {
      this.vel.x = -this.vel.x;
    }
    if (this.y > canvasInstance.height + 50 || this.y < -50) {
      this.vel.y = -this.vel.y;
    }
    this.x += this.vel.x;
    this.y += this.vel.y;
  }
}

export default CanvasBall;
