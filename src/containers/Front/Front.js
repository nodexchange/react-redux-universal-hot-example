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
    });
    copy.push({
      smallHeader: 'Drive Performance',
      header: 'Through Data-first approach',
      description: 'Ads are dead. That\'s why produce personlised eye-catching experiences. Our focus is to engage new audiences through experiences. Ad server agnostic optimisation and solutions. Personlised to the user through various input points.  Asset level dynamic optimisation Machine Learning algorithm',
    });
    copy.push({
      smallHeader: 'Immersive',
      header: '360 & VR Experiences',
      description: 'Cross-screen 360* formats',
    });
    copy.push({
      smallHeader: 'Standard creative display and new 3D',
      header: '',
      description: 'VPAID HTML5 and RichMedia. Our talented creative team can assist with simple standard IAB executions, templates production as well as full scale, responsive, true cross-screen ads and home page takeovers',
    });
    copy.push({
      smallHeader: 'Cross platform',
      header: 'AGNOSTIC SOLUTIONS',
      description: 'Our true cross-screen personlised solutions accelarate conversions and drive higher campaign performance.',
    });
    copy.push({
      smallHeader: 'Contextually enhanced',
      header: 'executions',
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
