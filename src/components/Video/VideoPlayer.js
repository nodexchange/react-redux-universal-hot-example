import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class VideoPlayer extends Component {
  static propTypes = {
    type: PropTypes.string,
    src: PropTypes.string,
    inView: PropTypes.bool,
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }

  pausePlayer() {
    if (this.videoInstance) {
      if (!this.videoInstance.paused) {
        this.videoInstance.pause();
      }
    }
  }

  resumePlayer() {
    if (this.videoInstance) {
      if (this.videoInstance.paused) {
        this.videoInstance.play();
      }
    }
  }

  render() {
    // controls autoPlay
    const styles = require('./VideoPlayer.scss');

    if (!this.props.inView) {
      this.pausePlayer();
    } else {
      this.resumePlayer();
    }
    /* eslint-disable */
    return (
      <video autoPlay className={styles.videoMain} ref={(videoInstance) => { this.videoInstance = videoInstance; }} width={this.props.width} id="video-player" preload="metadata" loop muted>
        <source src={this.props.src} type={this.props.type} />
      </video>
    );
    /* eslint-enable */
  }
}
