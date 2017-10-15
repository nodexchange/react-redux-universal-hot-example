import React from 'react';
import { IndexRoute, Route } from 'react-router';

// eslint-disable-next-line import/extensions
import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
    App,
    About,
    Chat,
    Contact,
    Front,
    Login,
    LoginSuccess,
    NotFound,
    Projects,
    Survey,
    Widgets
  } from 'containers'; // eslint-disable-line import/extensions

export default (store) => {
  const requireLogin = (nextState, replace, cb) => {
    function checkAuth() {
      const { auth: { user } } = store.getState();
      if (!user) {
        // oops, not logged in, so can't be here!
        replace('/');
      }
      cb();
    }

    if (!isAuthLoaded(store.getState())) {
      store.dispatch(loadAuth()).then(checkAuth);
    } else {
      checkAuth();
    }
  };

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Front} />

      { /* Routes requiring login */ }
      <Route onEnter={requireLogin}>
        <Route path="chat" component={Chat} />
        <Route path="loginSuccess" component={LoginSuccess} />
      </Route>

      { /* Routes */ }
      <Route path="about" component={About} />
      <Route path="login" component={Login} />
      <Route path="survey" component={Survey} />
      <Route path="widgets" component={Widgets} />
      <Route path="contact" component={Contact} />
      <Route path="projects" component={Projects} />

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
