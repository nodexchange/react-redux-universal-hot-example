import React, { Component, PropTypes } from 'react';
// import { ProgressBar } from 'react-bootstrap';
import { toVideoDuration } from '../utils/';
import Thumbnail from './Thumbnail';
import BarMarker from './BarMarker';

export default class ProgressControl extends Component {
  static propTypes = {
    api: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    offsetLeft: PropTypes.number,
    vidWidth: PropTypes.number,
    thumbnail: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    duration: PropTypes.number
  };

  getInitialState() {
    return {
      progress: 0,
      seekTime: 0,
      rawSeekTime: 0,
      showTicket: 'hidden',
      ticketLeft: 0
    };
  }

  componentDidMount() {
    this.props.api.addEventListener('timeupdate', this.onTimeUpdateHandler, false);
    this.updateBarState();
  }

  onMouseSeekHandler(event) {
    const api = this.props.api;
    const pos = (event.pageX - this.props.offsetLeft) / this.props.vidWidth;
    const ttt = pos * api.duration;

    this.setState({ seekTime: toVideoDuration(ttt),
      rawSeekTime: ttt,
      showTicket: 'visible',
      ticketLeft: event.pageX
    });
  }

  onTimeUpdateHandler() {
    const api = this.props.api;
    const progress = Math.floor((100 / api.duration) * api.currentTime);
    this.setState({ progress });
  }


  onMouseOutHandler() {
    this.setState({ showTicket: 'hidden' });
  }

  updateBarState() {
    const bar = this.refs.seekbar.getDOMNode();
    this.setState({ offsetLeft: bar.offsetLeft });
  }

  seekHandler(event) {
    const api = this.props.api;
    const pos = (event.pageX - this.props.offsetLeft) / this.props.vidWidth;
    api.currentTime = pos * api.duration;
  }

  render() {
        // <ProgressBar ref="seekbar"
        //   now={this.state.progress}
        //   style={{ width: this.props.vidWidth + 'px' }}
        // />
    return (
      <div
        className="progress-controls"
        onClick={this.seekHandler}
        onMouseOver={this.onMouseSeekHandler}
        onMouseMove={this.onMouseSeekHandler}
        onMouseOut={this.onMouseOutHandler}
      >


        <BarMarker
          timeMarks={this.props.thumbnail.timeMarks}
          barWidth={this.props.vidWidth}
          duration={this.props.duration}
        />

        <div style={{ visibility: this.state.showTicket, position: 'absolute', left: this.state.ticketLeft - 100 }} >
          <strong>{this.state.seekTime}</strong>
          <br />
          <Thumbnail video={this.props.thumbnail} seek={this.state.rawSeekTime} width="200px" />
        </div>
      </div>
    );
  }
}
