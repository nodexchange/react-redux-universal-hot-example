import React, { Component } from 'react';

export default class Hero extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    // const { info, load } = this.props; // eslint-disable-line no-shadow
    // eslint-disable-next-line global-require
    const styles = require('./Hero.scss');

    return (
      <div className={styles.section}>
        <div className={styles.info}>
          <span className={styles.smallHeader}>Small Header</span>
          <h1 className={styles.header}>LARGE HEADER</h1>
          <span className={styles.line}>{/* eslint-disable-line no-shadow */}</span>
        </div>
      </div>
    );
  }
}
