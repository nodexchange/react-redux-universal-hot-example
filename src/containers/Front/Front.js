/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { FrontItem } from 'components';

// eslint-disable-next-line import/extensions, import/no-extraneous-dependencies
// import config from '../../config';

// eslint-disable-next-line react/prefer-stateless-function
export default class Front extends Component {
  render() {
    // eslint-disable-next-line global-require
    const styles = require('./Front.scss');
    // require the logo image both from client and server
    // eslint-disable-next-line global-require
    return (
      <div className={styles.front}>
        <Helmet title="Home" />
        <FrontItem inView />
        <div id={styles.two} className={styles.section}>.</div>
        <div id={styles.three} className={styles.section}>.</div>
        <div id={styles.four} className={styles.section}>.</div>
        <div id={styles.five} className={styles.section}>.</div>
      </div>
    );
  }
}
