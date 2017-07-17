import React, { Component, PropTypes } from 'react';
import ProgressControl from './ProgressControl';

export default class ControlPanel extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    vidWidth: PropTypes.number
  };

  render() {
    return (
      <ProgressControl {...this.props} style={{ width: this.props.vidWidth + 'px' }} />
    );
  }
}
