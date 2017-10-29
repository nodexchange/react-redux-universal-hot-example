import React, { Component, PropTypes } from 'react';

export default class Hero extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    smallHeader: PropTypes.string,
    header: PropTypes.string,
    smallText: PropTypes.string,
    background: PropTypes.string
  }

  render() {
    // const { info, load } = this.props; // eslint-disable-line no-shadow
    // eslint-disable-next-line global-require
    const styles = require('./Hero.scss');

    return (
      <div className={styles.hero + ' ' + styles[this.props.background]}>
        <div className={styles.info}>
          <span className={styles.smallHeader}>{this.props.smallHeader}</span>
          <h1 className={styles.header}>{this.props.header}</h1>
          <span className={styles.line}>{/* eslint-disable-line no-shadow */}</span>
          <span className={styles.smallText}>{this.props.smallText}</span>
        </div>
      </div>
    );
  }
}
