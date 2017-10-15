import React, { Component } from 'react';

export default class Divider extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    // eslint-disable-next-line global-require
    const styles = require('./Divider.scss');

    return (
      <div className={styles.divider} />
    );
  }
}
