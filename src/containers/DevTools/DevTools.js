import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { createDevTools } from 'redux-devtools';
// import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
// import ChartMonitor from 'redux-devtools-chart-monitor';
/* eslint-enable */

export default createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    changeMonitorKey="ctrl-m"
  >
    {''}
  </DockMonitor>
);
// <LogMonitor />
 // <ChartMonitor />
// <SliderMonitor keyboardEnabled />
