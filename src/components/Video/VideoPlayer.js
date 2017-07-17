import React, { Component, PropTypes } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class VideoPlayer extends Component {
  static propTypes = {
    type: PropTypes.string,
    src: PropTypes.string,
    width: PropTypes.number

  }
  render() {
    return (
      <video width={this.props.width} id="video-player" preload="metadata" controls>
        <source src={this.props.src} type={this.props.type} />
      </video>
    );
  }
}
