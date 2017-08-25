import React, { Component, PropTypes } from 'react';
import { VideoPlayer } from 'components';

export default class SectionVideo extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    inView: PropTypes.bool.isRequired,
    videoLink: PropTypes.string
  };

  render() {
    // const { info, load } = this.props; // eslint-disable-line no-shadow
    // eslint-disable-next-line global-require
    const styles = require('./SectionVideo.scss');

    console.log('___ HERE _____');
    let outOrInView = styles.outView;
    if (this.props.inView) {
      outOrInView = styles.inView;
    }
    let videoNode = '<div></div>';
    if (this.props.videoLink) {
      videoNode = (<VideoPlayer src="/test.mp4" type="video/mp4" width="100%" inView={outOrInView} />);
    }
    return (
      <div className={styles.videoSection}>
        {videoNode}
      </div>
    );
  }
}
