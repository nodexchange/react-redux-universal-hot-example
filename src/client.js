/**
 * THIS IS THE ENTRY POINT FOR THE CLIENT, JUST LIKE server.js IS THE ENTRY POINT FOR THE SERVER.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import io from 'socket.io-client';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { ReduxAsyncConnect } from 'redux-async-connect';
import useScroll from 'scroll-behavior/lib/useStandardScroll';

import createStore from './redux/create';
import ApiClient from './helpers/ApiClient';
import getRoutes from './routes';

const client = new ApiClient();
const browserHistoryScroll = useScroll(() => browserHistory)();
const dest = document.getElementById('content');
// eslint-disable-next-line no-underscore-dangle
const store = createStore(browserHistoryScroll, client, window.__data);
const history = syncHistoryWithStore(browserHistoryScroll, store);
ReactGA.initialize('UA-105179082-1');

function initSocket() {
  const socket = io('', { path: '/ws' });
  socket.on('news', (data) => {
    console.log(data);
    socket.emit('my other event', { my: 'data from client' });
  });
  socket.on('msg', (data) => {
    console.log(data);
  });

  return socket;
}

global.socket = initSocket();

const component = (
  <Router
    render={props =>
      <ReduxAsyncConnect
        {...props}
        helpers={{ client }}
        filter={item => !item.deferred}
      />
    } history={history}
  >
    {getRoutes(store)}
  </Router>
);

ReactDOM.render(
  <Provider store={store} key="provider">
    {component}
  </Provider>,
  dest
);

if (process.env.NODE_ENV !== 'production') {
  window.React = React; // enable debugger

  if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any' +
      'client-side code.');
  }
}

if (__DEVTOOLS__ && !window.devToolsExtension) {
  // eslint-disable-next-line global-require
  // const DevTools = require('./containers/DevTools/DevTools');
  // <DevTools />
  const mainStyle = {
    height: '100%'
  };

  ReactDOM.render(
    <Provider store={store} key="provider">
      <div id="main-client" style={mainStyle}>
        {component}
      </div>
    </Provider>,
    dest
  );
}
