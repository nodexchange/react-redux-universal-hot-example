import React from 'react';
import { IndexRoute, Route } from 'react-router';
import ReactGA from 'react-ga';

// eslint-disable-next-line import/extensions
import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
    App,
    Chat,
    // Home,
    Widgets,
    About,
    Front,
    Contact,
    Login,
    LoginSuccess,
    Survey,
    NotFound,
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
  let gaActive = false;

  const logPageView = () => {
    try {
      ReactGA.set({ page: window.location.pathname });
      ReactGA.pageview(window.location.pathname);
      console.log('LOG :: ' + window.location.pathname);
    } catch (e) {
      console.log('LOG PAGE VIEW ' + e.message);
    }
  };

  const enterTest = () => {
    setTimeout(() => {
      try {
        if (!gaActive) {
          ReactGA.initialize('UA-105179082-1');
          gaActive = true;
        }
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
      } catch (e) {
        console.log('[GA] LOG PAGE VIEW ' + e.message);
      }
    }, 1500);
  };

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App} onUpdate={logPageView} onEnter={enterTest}>
      { /* Home (main) route */ }
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

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
