import React, { Component, PropTypes } from 'react';

export default class ContactItem extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    inView: PropTypes.bool.isRequired,
    smallHeader: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
  };

  render() {
    // const { info, load } = this.props; // eslint-disable-line no-shadow
    // eslint-disable-next-line global-require
    const styles = require('./ContactItem.scss');

    const classes = ['one'];
    const selectedClass = styles[classes[0]];

    let outOrInView = styles.outView;
    if (this.props.inView) {
      outOrInView = styles.inView;
    }
    const text = this.props.description;
    return (
      <div id={selectedClass} className={styles.section}>
        <div className={styles.info}>
          <span className={styles.smallHeader + ' ' + outOrInView}>{this.props.smallHeader}</span>
          <h1 className={styles.header + ' ' + outOrInView}>{this.props.header}</h1>
          <span className={styles.line + ' ' + outOrInView}>{/* eslint-disable-line no-shadow */}</span>
          <div className={styles.description + ' ' + outOrInView}>
            {text.split('\n').map(i =>
              <div className={styles.descText}>{i}</div>
            )}
          </div>
          <a href="mailto:hello@quartile.io?Subject=Hello%20Quartile%21" className={styles.btn + ' ' + outOrInView}>
            {this.props.buttonText}
          </a>
        </div>
      </div>
    );
  }
}
