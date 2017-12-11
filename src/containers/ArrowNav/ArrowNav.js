/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import * as scrollActions from 'redux/modules/scroll';
import Scroll from '../../helpers/Scroll';


@connect(
  state => (
    {
      offsetRatio: state.scroll.offsetRatio,
      maxPages: state.scroll.maxPages
    }),
  { scrollActions }
)

// eslint-disable-next-line react/prefer-stateless-function
export default class ArrowNav extends Component {
  static propTypes = {
    offsetRatio: PropTypes.number,
    maxPages: PropTypes.number
  }

  arrowUpHandler = () => {
    this.currentPage -= 1;
    if (this.currentPage < 1) {
      this.currentPage = 1;
    }
    Scroll.scrollToSection(this.currentPage, 'up');
    // TODO(martin): handle 1
  }

  arrowDownHandler = () => {
    this.currentPage += 1;
    if (this.currentPage > this.props.maxPages) {
      this.currentPage = 1;
    }
    Scroll.scrollToSection(this.currentPage, 'down');
    // TODO(martin): handle over max page
  }

  render() {
    // eslint-disable-next-line global-require
    const styles = require('./ArrowNav.scss');

    this.currentPage = 1;
    if (this.props.offsetRatio) {
      this.currentPage = Math.floor(this.props.offsetRatio + 1.3);
    }
    if (this.props.maxPages === 1) {
      return (<div className={styles.arrowNav} />);
    }
    return (
      <div className={styles.arrowNav}>
        <button className={styles.baseArrow + ' ' + styles.arrowUp} onClick={this.arrowUpHandler} />
        <button className={styles.baseArrow + ' ' + styles.arrowDown} onClick={this.arrowDownHandler} />
        <div className={styles.counter}>
          <span className={styles.counterCurrent}>{this.currentPage}</span>
          <span className={styles.counterOf}> of </span>
          <span className={styles.currentMax}>{this.props.maxPages}</span>
        </div>
      </div>
    );
  }
}
