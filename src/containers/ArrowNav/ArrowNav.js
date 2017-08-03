/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
// import { IndexLink, Link } from 'react-router';
// import throttle from '../../helpers/Throttle';

// eslint-disable-next-line react/prefer-stateless-function
export default class ArrowNav extends Component {

  render() {
    // eslint-disable-next-line global-require
    const styles = require('./ArrowNav.scss');

    return (
      <div className={styles.arrowNav}>
        <button className={styles.baseArrow + ' ' + styles.arrowUp} />
        <button className={styles.baseArrow + ' ' + styles.arrowDown} />
        <div className={styles.counter}>
          <span className={styles.counterCurrent}>1</span><span className={styles.counterOf}> of </span><span className={styles.currentMax}>9</span>
        </div>
      </div>
    );
  }
}
