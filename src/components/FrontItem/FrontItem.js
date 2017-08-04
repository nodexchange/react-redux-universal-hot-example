import React, { Component, PropTypes } from 'react';

export default class FrontItem extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    inView: PropTypes.bool.isRequired // eslint-disable-line react/forbid-prop-types
  };

  render() {
    // const { info, load } = this.props; // eslint-disable-line no-shadow
    // eslint-disable-next-line global-require
    const styles = require('./FrontItem.scss');

    let outOrInView = styles.outView;
    if (this.props.inView) {
      outOrInView = styles.inView;
    }
    return (
      <div id={styles.one} className={styles.section}>
        <div className={styles.info}>
          <span className={styles.smallHeader + ' ' + outOrInView}>small HELLO</span>
          <h1 className={styles.header + ' ' + outOrInView}>header</h1>
          <span className={styles.line + ' ' + outOrInView}>{/* eslint-disable-line no-shadow */}</span>
          <p className={styles.description + ' ' + outOrInView}>To be consistent with data protection laws, we're asking that you take a moment to review key points of our Privacy Policy, which covers all Google services and describes.</p>
          <a href="/" className={styles.btn + ' ' + outOrInView}>Learn more</a>
        </div>
      </div>
    );
  }
}
