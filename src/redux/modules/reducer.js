import { combineReducers } from 'redux';
import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';
import { reducer as form } from 'redux-form';

import auth from './auth';
import counter from './counter';
import info from './info';
import widgets from './widgets';
import resize from './resize';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  auth,
  resize,
  form,
  multireducer: multireducer({
    counter1: counter,
    counter2: counter,
    counter3: counter
  }),
  info,
  widgets
});
