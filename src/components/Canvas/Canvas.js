/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Helmet from 'react-helmet';

// eslint-disable-next-line import/extensions, import/no-extraneous-dependencies
import { CanvasBall } from 'components';

// eslint-disable-next-line react/prefer-stateless-function
export default class Canvas extends Component {
  static propTypes = {
    h1Text: PropTypes.string
  };

  componentDidMount() {
    this.updateCanvas();
  }

  componentWillUnmount() {
    if (this.canvasAnimation) {
      cancelAnimationFrame(this.canvasAnimation);
    }
  }

  updateCanvas() {
    this.canvas.width = document.getElementsByClassName(this.styles.masthead)[0].clientWidth;
    this.canvas.height = document.getElementsByClassName(this.styles.masthead)[0].clientHeight + 400;
    console.log('____ ' + this.canvas.height);
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillRect(0, 0, 100, 100);
    this.TAU = 2 * Math.PI;
    this.times = [];

    this.balls = [];
    for (let i = 0; i < this.canvas.width * (this.canvas.height / (65 * 65)); i++) {
      this.balls.push(new CanvasBall(
        this.canvas, Math.random() * this.canvas.width, Math.random() * this.canvas.height));
    }

    this.lastTime = Date.now();
    // this.mouseX = -1e9;
    // this.mouseY = -1e9;
    // document.addEventListener('mousemove', (event) => {
    //   this.mouseX = event.clientX;
    //   this.mouseY = event.clientY;
    // });

    // Start
    this.loop();
  }

  draw() {
    this.ctx.globalAlpha = 1;
    this.ctx.fillStyle = '#13092d';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    for (let index = 0; index < this.balls.length; index++) {
      const ball = this.balls[index];
      ball.draw(this.ctx, this.canvas);
      this.ctx.beginPath();
      for (let index2 = this.balls.length - 1; index2 > index; index2 += -1) {
        const ball2 = this.balls[index2];
        const dist = Math.hypot(ball.x - ball2.x, ball.y - ball2.y);
        if (dist < 100) {
          this.ctx.strokeStyle = '#ddd';
          this.ctx.globalAlpha = 0.6 - (dist > 100 ? 0.3 : dist / 150);
          this.ctx.lineWidth = '2px';
          this.ctx.moveTo((0.5 + ball.x) | 0, (0.5 + ball.y) | 0);
          this.ctx.lineTo((0.5 + ball2.x) | 0, (0.5 + ball2.y) | 0);
        }
      }
      this.ctx.stroke();
    }
  }

  distMouse(ball) {
    return Math.hypot(ball.x - this.mouseX, ball.y - this.mouseY);
  }

  loop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.update();
    this.draw();
    this.canvasAnimation = requestAnimationFrame(() => {
      this.loop();
    });
  }

  update() {
    const diff = Date.now() - this.lastTime;
    for (let frame = 0; frame * 16.6667 < diff; frame++) {
      for (let index = 0; index < this.balls.length; index++) {
        this.balls[index].update(this.canvas);
      }
    }
    this.lastTime = Date.now();
  }

  render() {
    // eslint-disable-next-line global-require
    this.styles = require('./Canvas.scss');

    return (
      <div className={this.styles.home}>
        <Helmet title="Canvas" />
        <div className={this.styles.masthead}>
          <h1>{this.props.h1Text}</h1>
          <canvas className={this.styles.masterCanvas} ref={(c) => { this.canvas = c; }} width={300} height={300} />
        </div>
      </div>
    );
  }
}
