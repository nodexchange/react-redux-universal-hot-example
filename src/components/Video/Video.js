import React, { Component } from 'react';
import videoOptions from './config';
import VideoPlayer from './components/VideoPlayer';
import ControlPanel from './components/ControlPanel';

export default class Video extends Component { // eslint-disable-line react/prefer-stateless-function
  getInitialState() {
    return {
      vidWidth: 0,
      offsetLeft: 0,
      api: undefined,
      duration: 0
    };
  }

  componentDidMount() {
    this.handleResize();
    this.initPlayerApi();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    const master = this.refs.master.getDOMNode();  // eslint-disable-line react/no-string-refs
    this.setState({
      vidWidth: master.clientWidth,
      offsetLeft: master.offsetLeft
    });
  }

  initPlayerApi() {
    const player = this.refs.player.getDOMNode(); // eslint-disable-line react/no-string-refs
    player.addEventListener('loadedmetadata', this.loadedMetaData);
    this.setState({ api: player });
  }

  loadedMetaData(event) {
    this.setState({ duration: event.target.duration });
  }

  render() {
    let cpan;
    if (this.state.duration > 0) { // don't mount the seekbar until metadata are loaded
      cpan = <ControlPanel {...this.state} thumbnail={videoOptions} />;
    }

    return (
      // eslint-disable-next-line react/no-string-refs
      <div className="row" ref="master">
        <VideoPlayer
      // eslint-disable-next-line react/no-string-refs
          ref="player"
          width={this.state.vidWidth}
          src={videoOptions.src}
          type={videoOptions.type}
        />
        {cpan}
      </div>
    );
  }
}
