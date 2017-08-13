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
      smallHeader: 'Data-driven',
      header: 'Creative Solutions',
      description: 'We are data obsessed innovators, day dreamers, creative ad specialists, always striving to push the boundries of our bleeding edge digital executions to the next level.',
      buttonText: 'Learn More',
      link: '/contact'
    });
    copy.push({
      smallHeader: 'Accelerate',
      header: 'Conversions',
      description: 'Ads are dead. That\'s why produce personlised eye-catching experiences. Our focus is to engage new audiences through user-centric data-first approach. Personlised to the user through various input points.  Asset level dynamic optimisation Machine Learning algorithm',
      buttonText: 'Learn More',
      link: '/contact'
    });
    copy.push({
      smallHeader: 'Immersive',
      header: '360 & VR Experiences',
      description: 'Cross-screen 360* formats',
      buttonText: 'Learn More',
      link: '/contact'
    });
    copy.push({
      smallHeader: 'Standard creative display',
      header: 'Contextually enhanced',
      description: 'VPAID HTML5 and RichMedia. Our talented creative team can assist with simple standard IAB executions, templates production as well as full scale, responsive, true cross-screen ads and home page takeovers',
      buttonText: 'Learn More',
      link: '/contact'
    });
    copy.push({
      smallHeader: 'Cross platform',
      header: 'AGNOSTIC SOLUTIONS',
      description: 'Ad server agnostic optimisation and solutions. Our true cross-screen personlised solutions accelarate conversions and drive higher campaign performance.',
      buttonText: 'Learn More',
      link: '/contact'
    });
    copy.push({
      smallHeader: '',
      header: 'Talk to us',
      description: '',
      buttonText: 'Learn More',
      link: '/contact'
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
        rows.push(<FrontItem inView key={i} order={i} {...panelsCopy[i]} offset={this.props.offsetRatio} />);
      } else {
        rows.push(<FrontItem inView={false} key={i} order={i} {...panelsCopy[i]} offset={this.props.offsetRatio} />);
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
