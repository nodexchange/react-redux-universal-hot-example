import React, { Component, PropTypes } from 'react';

export default class Thumbnail extends Component { // eslint-disable-line react/prefer-stateless-function
  componentWillReceiveProps(nextProps) {
    const api = this.refs.thumbnail.getDOMNode();
    api.currentTime = nextProps.seek;
  }

  render() {
    return (
      <video ref="thumbnail" width={this.props.width} preload='auto'>
        <source src={this.props.video.src} type={this.props.video.type} />
      </video>
    );
  }
}
