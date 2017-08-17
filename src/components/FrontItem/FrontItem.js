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
    link: PropTypes.string.isRequired,
    offset: PropTypes.number
  };

  calculateTop() {
    let tValue = 10;
    if (this.props.offset >= this.props.order && this.props.offset < (this.props.order + 1)) {
      const value = (this.props.offset - this.props.order) * 1.2;
      tValue += (70 * value);
      if (value > 0.5) {
        tValue = 45;
      }
    }
    if (tValue > 45) {
      tValue = 45;
    }
    return Math.round(tValue);
  }

  render() {
    // const { info, load } = this.props; // eslint-disable-line no-shadow
    // eslint-disable-next-line global-require
    const styles = require('./FrontItem.scss');

    const classes = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
    const selectedClass = styles[classes[this.props.order]];

    let outOrInView = styles.outView;
    let infoOutOrInView = styles.infoOutView;
    if (this.props.inView) {
      outOrInView = styles.inView;
      infoOutOrInView = styles.infoInView;
    }
    const topValue = this.calculateTop();
    const topStyle = { top: topValue + '%' };
    if (this.props.inView) {
      console.log(' topValue : ' + topValue + ' : topStyle : ' + topStyle.top);
    }
    return (
      <div id={selectedClass} className={styles.section}>
        <div className={styles.info + ' ' + infoOutOrInView} style={topStyle}>
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
