/* eslint-disable import/no-extraneous-dependencies */
// import { createDevTools } from 'redux-devtools';
// import LogMonitor from 'redux-devtools-log-monitor';
// import DockMonitor from 'redux-devtools-dock-monitor';
// import ChartMonitor from 'redux-devtools-chart-monitor';
/* eslint-enable */

import React from 'react';
import { PropTypes } from 'prop-types';

const DevTools = props => (
  <div id="dev">{props.large}</div>
);
DevTools.propTypes = {
  large: PropTypes.bool
};

export default DevTools;


// export default createDevTools(
//   <div id="devtools">{''}</div>
// );
// <DockMonitor
//   toggleVisibilityKey="ctrl-h"
//   changePositionKey="ctrl-q"
//   changeMonitorKey="ctrl-m"
// >
//   {''}
// </DockMonitor>
// <LogMonitor />
 // <ChartMonitor />
// <SliderMonitor keyboardEnabled />
