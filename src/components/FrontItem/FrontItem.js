import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class FrontItem extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    inView: PropTypes.bool.isRequired,
    order: PropTypes.number.isRequired,
    smallHeader: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  };

  render() {
    // const { info, load } = this.props; // eslint-disable-line no-shadow
    // eslint-disable-next-line global-require
    const styles = require('./FrontItem.scss');

    const classes = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
    const selectedClass = styles[classes[this.props.order]];

    let outOrInView = styles.outView;
    if (this.props.inView) {
      outOrInView = styles.inView;
    }
    return (
      <div id={selectedClass} className={styles.section}>
        <div className={styles.info}>
          <span className={styles.smallHeader + ' ' + outOrInView}>{this.props.smallHeader}</span>
          <h1 className={styles.header + ' ' + outOrInView}>{this.props.header}</h1>
          <span className={styles.line + ' ' + outOrInView}>{/* eslint-disable-line no-shadow */}</span>
          <p className={styles.description + ' ' + outOrInView}>
            {this.props.description}
          </p>
          <Link to={this.props.link} className={styles.btn + ' ' + outOrInView}>{this.props.buttonText}</Link>
        </div>
      </div>
    );
  }
}
