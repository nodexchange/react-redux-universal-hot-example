import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class Divider extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    colour: PropTypes.string
  };
  render() {
    // eslint-disable-next-line global-require
    const styles = require('./Divider.scss');

    return (
      <div className={styles.divider + ' ' + styles[this.props.colour]} />
    );
  }
}
