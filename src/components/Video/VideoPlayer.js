import React, { Component, PropTypes } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class VideoPlayer extends Component {
  static propTypes = {
    type: PropTypes.string,
    src: PropTypes.string,
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }

  render() {
    // controls autoPlay
    const styles = require('./VideoPlayer.scss');

    return (
      <video autoPlay className={styles.videoMain} width={this.props.width} id="video-player" preload="metadata" loop muted>
        <source src={this.props.src} type={this.props.type} />
      </video>
    );
  }
}
