import React, { Component, PropTypes } from 'react';

export default class FrontItem extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    info: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    load: PropTypes.func
  };

  render() {
    // const { info, load } = this.props; // eslint-disable-line no-shadow
    // eslint-disable-next-line global-require
    const styles = require('./FrontItem.scss');

    return (
      <div id={styles.one} className={styles.section}>
        <div className={styles.info}>
          <span className={styles.smallHeader}>small HELLO</span>
          <h1 className={styles.header}>header</h1>
          <span className={styles.line}>{/* eslint-disable-line no-shadow */}</span>
          <p className={styles.description}>To be consistent with data protection laws, we're asking that you take a moment to review key points of our Privacy Policy, which covers all Google services and describes.</p>
        </div>
      </div>
    );
  }
}
