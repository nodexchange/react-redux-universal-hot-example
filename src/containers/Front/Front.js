/* eslint-disable react/no-unescaped-entities */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { SectionItem } from 'components';
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
    const panelValue = Math.round(nextProps.offsetRatio) + 0.2;
    if (panelValue !== this.currentPanel) {
      this.currentPanel = Math.round(nextProps.offsetRatio);
    }
  }

  panelCopyObject = () => {
    const copy = [];
    copy.push({
      smallHeader: 'Data-driven',
      header: 'Creative Solutions',
      description: 'We are data obsessed, London based innovators, day dreamers, creative ad specialists, always striving to push the boundaries of our bleeding edge digital executions to the next level.',
      buttonText: 'Learn More',
      link: '/contact',
      sectionClass: 'one',
      videoLink: '/top.mp4'
    });
    copy.push({
      smallHeader: 'Accelerate',
      header: 'Conversions',
      description: 'Ads are dead. That\'s why we produce eye-catching personalised experiences. Our focus is to engage new audiences through the user-centric data-first approach and adapt it real-time through various input points. By applying our asset level targeting and dynamic creative optimisation based on our proprietary machine learning algorithm, we produce ads that deliver premium performance.',
      buttonText: 'Learn More',
      link: '/contact',
      sectionClass: 'two'
    });
    copy.push({
      smallHeader: 'Immersive',
      header: '360° & VR Experiences',
      description: 'Innovation is in our DNA. Our personalised 360° Cross-screen video player\'s intelligence adjusts the content in the real time, exposing the audience to the most interactive areas. Our VR experiences can seamlessly deliver immersive ground-breaking visuals that no other static media can offer.',
      buttonText: 'Learn More',
      link: '/contact',
      sectionClass: 'three'
    });
    copy.push({
      smallHeader: 'Standard creative display',
      header: 'Contextually enhanced',
      description: 'Across web, mobile, in-app or video inventory, our talented creative team can assist with simple standard IAB executions, templates production as well as full scale, responsive, true cross-screen ads and home page takeovers',
      buttonText: 'Learn More',
      link: '/contact',
      sectionClass: 'four'
    });
    copy.push({
      smallHeader: 'Open cross platform',
      header: 'AGNOSTIC SOLUTIONS',
      description: 'Our services are not designed to lock-in our customers. Our product and optimisation processes are ad server agnostic and can run across various cross-environment inventory simultaneously. Our true cross-screen personalised solutions accelerate conversions and drive higher campaign performance.',
      buttonText: 'Learn More',
      link: '/contact',
      sectionClass: 'five'
    });
    copy.push({
      smallHeader: 'Have an idea',
      header: 'Talk to us',
      description: 'We love to brainstorm ideas, and we do believe that the inspiration can come from anywhere. Inspire us to innovate, challenge us, tell us what you think, we are always happy to learn new things.',
      buttonText: 'Contact us',
      link: '/contact',
      sectionClass: 'six'
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
        rows.push(<SectionItem inView key={i} order={i} {...panelsCopy[i]} offset={this.props.offsetRatio} />);
      } else {
        rows.push(<SectionItem inView={false} key={i} order={i} {...panelsCopy[i]} offset={this.props.offsetRatio} />);
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
