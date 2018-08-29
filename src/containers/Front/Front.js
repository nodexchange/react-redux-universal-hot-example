/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Clients, Divider, SectionItem } from 'components';
import { bindActionCreators } from 'redux';
import * as resizeActions from 'redux/modules/resize';
import * as scrollActions from 'redux/modules/scroll';
import * as copyActions from 'redux/modules/copy';

import throttle from '../../helpers/Throttle';

@connect(
  state => ({ offsetRatio: state.scroll.offsetRatio, localeCopy: state.copy.localeCopy }),
  dispatch => bindActionCreators({ ...scrollActions, ...resizeActions, ...copyActions }, dispatch)
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
    offsetRatio: PropTypes.number,
    loadCopy: PropTypes.func.isRequired,
    localeCopy: PropTypes.oneOfType([
      PropTypes.object, // eslint-disable-line react/forbid-prop-types
      PropTypes.array // eslint-disable-line react/forbid-prop-types
    ])
  }
  constructor(props) {
    super(props);
    this.currentPanel = this.props.offsetRatio || 0;
    this.localeCopy = this.props.localeCopy || 'pending';
  }

  componentDidMount() {
    window.addEventListener('resize', throttle(this.props.mainImageResizeAction, 100));
    window.addEventListener('scroll', throttle(this.props.mainWindowScrollAction, 100));
    this.props.mainWindowScrollAction();
    this.props.mainImageResizeAction();
    this.props.updateMaxPages(6);
    this.props.loadCopy('front');
  }

  componentWillReceiveProps(nextProps) {
    // const panelValue = Math.round(nextProps.offsetRatio) + 0.2;
    const panelValue = Math.round(nextProps.offsetRatio) + 0.2;
    if (panelValue !== this.currentPanel) {
      this.currentPanel = Math.round(nextProps.offsetRatio);
    }
  }

  componentWillUnmount() {
    this.props.updateMaxPages(1);
  }

  defaultCopy = () => (
   'Quartile - Creative Ad Agency. DATA & EMPATHY DRIVEN SOLUTIONS. We are data obsessed innovators, day dreamers, creative ad specialists, always striving to push the boundaries of our emotional & bleeding edge digital executions.'
  )

  render() {
    // eslint-disable-next-line global-require
    const styles = require('./Front.scss');

    const frontPanelsCopy = this.props.localeCopy.data;
    if (!frontPanelsCopy) {
      return (<p>{this.defaultCopy()}</p>);
    }
    const rows = [];
    for (let i = 0; i < frontPanelsCopy.length; i++) {
      if (this.currentPanel === i) {
        rows.push(
          <SectionItem inView key={i} order={i} {...frontPanelsCopy[i]} offset={this.props.offsetRatio} />
        );
      } else {
        rows.push(
          <SectionItem inView={false} key={i} order={i} {...frontPanelsCopy[i]} offset={this.props.offsetRatio} />
        );
      }
    }
    return (
      <div className={styles.front}>
        <Helmet title="Home" />
        {rows}
        <Clients />
        <Divider colour="blue" />
        <Divider />
      </div>
    );
  }
}
