import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class Hero extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    smallHeader: PropTypes.string,
    header: PropTypes.string,
    smallText: PropTypes.string,
    client: PropTypes.string,
    date: PropTypes.string,
    demo: PropTypes.string,
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
          <div className={styles.projectInfo}>
            <span className={styles.smallText}>Client name: {this.props.client}</span>
            <br />
            <span className={styles.smallText}>Year: {this.props.date}</span>
            <br />
            <span className={styles.smallText}>Demo link:
            <a href={this.props.demo} target="_blank"> {this.props.demo}</a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
