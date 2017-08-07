/* eslint-disable react/no-unescaped-entities */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FrontItem } from 'components';
// import { bindActionCreators } from 'redux';
// import * as resizeActions from 'redux/modules/resize';
import * as scrollActions from 'redux/modules/scroll';

import throttle from '../../helpers/Throttle';

// @connect(
//   state => ({ isLandscape: state.resize.isLandscape, windowWidth: state.resize.windowWidth, offsetRatio: state.scroll.offsetRatio }),
//   () => (
//     {
//       resize: resizeActions.mainImageResizeAction,
//       scroll: scrollActions.mainWindowScrollAction
//     })
// )

// @connect(
//   state =>
//     ({
//       isLandscape: state.resize.isLandscape,
//       windowWidth: state.resize.windowWidth,
//       offsetRatio: state.scroll.offsetRatio
//     }),
//   dispatch => bindActionCreators(scrollActions, dispatch)
// )

// const mapStateToProps = state => ({ offsetRatio: state.scroll.offsetRatio });
// const mapDispatchToProps = (dispatch, { as }) => bindActionCreators({ scrollActions }, dispatch, as);

// @connect(
//   mapStateToProps,
//   mapDispatchToProps
// )


@connect(
  state => ({ offsetRatio: state.scroll.offsetRatio }),
  scrollActions
)

export default class Front extends Component {
  static propTypes = {
    // resize: PropTypes.func,
    mainWindowScrollAction: PropTypes.func.isRequired,
    // isLandscape: PropTypes.bool,
    // windowWidth: PropTypes.number,
    offsetRatio: PropTypes.number
  }

  componentDidMount() {
    // window.addEventListener('resize', throttle(this.props.resize, 100));
    window.addEventListener('scroll', throttle(this.props.mainWindowScrollAction, 100));
    this.props.mainWindowScrollAction();
    // this.props.resize();
    // console.log(this.)
  }

  componentWillReceiveProps(nextProps) {
    const panelValue = Math.round(nextProps.offsetRatio);
    if (panelValue !== this.currentPanel) {
      this.currentPanel = Math.round(nextProps.offsetRatio);
    }
    console.log(' __ will receive :: ' + nextProps.offsetRatio + ' ::: current panel ' + this.currentPanel);
  }

  render() {
    // eslint-disable-next-line global-require
    const styles = require('./Front.scss');
    // require the logo image both from client and server
    // eslint-disable-next-line global-require
    // console.log(this.props.offsetRatio);
    return (
      <div className={styles.front}>
        <Helmet title="Home" />
        <FrontItem inView />
        <div id="ratio">My value :: {this.props.offsetRatio}</div>
        <div id={styles.two} className={styles.section}>.</div>
        <div id={styles.three} className={styles.section}>.</div>
        <div id={styles.four} className={styles.section}>.</div>
        <div id={styles.five} className={styles.section}>.</div>
      </div>
    );
  }
}
