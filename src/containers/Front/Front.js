/* eslint-disable react/no-unescaped-entities */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FrontItem } from 'components';
import { bindActionCreators } from 'redux';
import * as resizeActions from 'redux/modules/resize';
import * as scrollActions from 'redux/modules/scroll';

import throttle from '../../helpers/Throttle';

@connect(
  state => ({ offsetRatio: state.scroll.offsetRatio }),
  dispatch => bindActionCreators({ ...scrollActions, ...resizeActions }, dispatch)
)

/*
@connect(
  state => ({ offsetRatio: state.scroll.offsetRatio }),
  scrollActions
)
*/

export default class Front extends Component {
  static propTypes = {
    // resize: PropTypes.func,
    mainWindowScrollAction: PropTypes.func.isRequired,
    mainImageResizeAction: PropTypes.func.isRequired,
    // isLandscape: PropTypes.bool,
    // windowWidth: PropTypes.number,
    offsetRatio: PropTypes.number
  }
  constructor(props) {
    super(props);
    this.currentPanel = this.props.offsetRatio || 0;
  }

  componentDidMount() {
    window.addEventListener('resize', throttle(this.props.mainImageResizeAction, 100));
    window.addEventListener('scroll', throttle(this.props.mainWindowScrollAction, 100));
    this.props.mainWindowScrollAction();
    this.props.mainImageResizeAction();
    // console.log(this.)
  }

  componentWillReceiveProps(nextProps) {
    const panelValue = Math.round(nextProps.offsetRatio) + 0.3;
    if (panelValue !== this.currentPanel) {
      this.currentPanel = Math.round(nextProps.offsetRatio);
    }
  }

  render() {
    // eslint-disable-next-line global-require
    const styles = require('./Front.scss');

    const rows = [];
    for (let i = 0; i < 6; i++) {
      if (this.currentPanel === i) {
        rows.push(<FrontItem inView key={i} order={i} />);
      } else {
        rows.push(<FrontItem inView={false} key={i} order={i} />);
      }
    }
    console.log(rows);
    return (
      <div className={styles.front}>
        <Helmet title="Home" />
        {rows}
      </div>
    );
  }
}
