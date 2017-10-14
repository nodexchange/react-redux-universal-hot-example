import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
// import { SectionVideo } from 'components';

export default class SectionItem extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    inView: PropTypes.bool.isRequired,
    smallHeader: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    sectionClass: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    order: PropTypes.number.isRequired,
    // key: PropTypes.number.isRequired,
    offset: PropTypes.number,
    // videoLink: PropTypes.string
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
    const styles = require('./SectionItem.scss');

    const selectedClass = styles[this.props.sectionClass];

    let outOrInView = styles.outView;
    let infoOutOrInView = styles.infoOutView;
    let inset = styles.inset;
    if ((this.props.order % 2) === 0) {
      inset = '';
    }
    if (this.props.inView) {
      outOrInView = styles.inView;
      infoOutOrInView = styles.infoInView;
    }
    if (this.props.inView) {
      outOrInView = styles.inView;
    }
    let linkNode = (
      <Link to={this.props.link} className={styles.btn + ' ' + outOrInView}>{this.props.buttonText}</Link>
    );
    if (this.props.link === '') {
      linkNode = (
        <a
          href="mailto:hello@quartile.io?Subject=Hello%20Quartile%21"
          className={styles.btn + ' ' + outOrInView}
        >
          {this.props.buttonText}
        </a>
      );
    }

    const topValue = this.calculateTop();
    const topStyle = { top: topValue + '%' };
    const text = this.props.description;
    // <SectionVideo key={this.props.key} inView={this.props.inView} videoLink={this.props.videoLink} />
    return (
      <div id={selectedClass} className={styles.section + ' ' + inset}>
        <div className={styles.info + ' ' + infoOutOrInView} style={topStyle}>
          <span className={styles.smallHeader + ' ' + outOrInView}>{this.props.smallHeader}</span>
          <h1 className={styles.header + ' ' + outOrInView}>{this.props.header}</h1>
          <span className={styles.line + ' ' + outOrInView}>{/* eslint-disable-line no-shadow */}</span>
          <div className={styles.description + ' ' + outOrInView}>
            {text.split('\n').map(i =>
              <div className={styles.descText}>{i}</div>
            )}
          </div>
          {linkNode}
        </div>
      </div>
    );
  }
}
