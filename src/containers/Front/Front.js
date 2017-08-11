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
    updateMaxPages: PropTypes.func.isRequired,
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
    this.props.updateMaxPages(6);
  }

  componentWillReceiveProps(nextProps) {
    const panelValue = Math.round(nextProps.offsetRatio) + 0.3;
    if (panelValue !== this.currentPanel) {
      this.currentPanel = Math.round(nextProps.offsetRatio);
    }
  }

  panelCopyObject = () => {
    const copy = [];
    copy.push({
      smallHeader: 'Quartile',
      header: 'Ad Agency',
      description: 'We are data innovators, day dreamers, creative execution specialists, always striving to push the boundries of our bleeding edge digital creative executions to the next level',
    });
    copy.push({
      smallHeader: 'Data-driven Ads',
      header: '',
      description: 'description 2',
    });
    copy.push({
      smallHeader: 'small header 3',
      header: '',
      description: '',
    });
    copy.push({
      smallHeader: 'small header 4',
      header: '',
      description: '',
    });
    copy.push({
      smallHeader: 'small header 5',
      header: '',
      description: '',
    });
    copy.push({
      smallHeader: 'small header 6',
      header: '',
      description: '',
    });
    return copy;
  }

  render() {
    // eslint-disable-next-line global-require
    const styles = require('./Front.scss');

    const panelsCopy = this.panelCopyObject();
    const rows = [];
    for (let i = 0; i < 6; i++) {
      if (this.currentPanel === i) {
        rows.push(<FrontItem inView key={i} order={i} {...panelsCopy[i]} />);
      } else {
        rows.push(<FrontItem inView={false} key={i} order={i} {...panelsCopy[i]} />);
      }
    }
    return (
      <div className={styles.front}>
        <Helmet title="Home" />
        {rows}
      </div>
    );
  }
}
