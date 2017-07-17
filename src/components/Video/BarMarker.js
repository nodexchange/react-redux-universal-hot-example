import React, { Component, PropTypes } from 'react';

import { compareNumbers } from '../utils/';

export default class BarMarker extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    timeMarks: PropTypes.number
  }
  getInitialState() {
    return {
      oneSecond: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.duration) {
      const oneSecond = nextProps.barWidth / nextProps.duration;
      this.setState({ oneSecond });
    }
  }

  render() {
    const oneSecond = this.state.oneSecond;
    const sortedMarks = this.props.timeMarks.sort(compareNumbers);

    const marks = sortedMarks.map((mark, index, values) => {
      // const current, previous, markVal;
      let markVal = 0;
      const current = (oneSecond * mark) - 3;
      let previous = (oneSecond * values[index - 1]) - 3;
      if (!previous) {
        previous = 0;
      }

      markVal = Math.floor(current - previous);

      return (
        <div key={mark} style={{ float: 'left' }}>
          <div style={{ background: 'transparent', width: markVal + 'px', float: 'left' }}>&nbsp;</div>
          <div style={{ background: 'orange', width: '3px', float: 'left' }}>&nbsp;</div>
        </div>
      );
    });

    return (
      <div style={{ width: '100%', position: 'relative', top: '-40px', float: 'left' }}>
        {marks}
      </div>
    );
  }
}
