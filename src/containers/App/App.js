import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { push } from 'react-router-redux';
import { asyncConnect } from 'redux-async-connect';

// eslint-disable-next-line import/extensions
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
// eslint-disable-next-line import/extensions
import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import { FooterBar } from 'components';
import { NavBar } from 'containers';
import config from '../../config';


@asyncConnect([{
  promise: ({ store: { dispatch, getState } }) => {
    const promises = [];

    if (!isInfoLoaded(getState())) {
      promises.push(dispatch(loadInfo()));
    }
    if (!isAuthLoaded(getState())) {
      promises.push(dispatch(loadAuth()));
    }

    return Promise.all(promises);
  }
}])
@connect(
  state => ({ user: state.auth.user }),
  { logout, pushState: push })
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    user: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      this.props.pushState('/loginSuccess');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState('/');
    }
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    const { user } = this.props;
    // FIXME(hoatle): styles not defined?
    // eslint-disable-next-line global-require
    const styles = require('./App.scss');

    /*
     {!user &&
              <LinkContainer to="/login">
                <NavItem eventKey={6}>Login</NavItem>
              </LinkContainer>}
              {user &&
              <LinkContainer to="/logout">
                <NavItem eventKey={7} className="logout-link" onClick={this.handleLogout}>
                  Logout
                </NavItem>
              </LinkContainer>}
    */

    return (
      <div className={styles && styles.app}>
        <Helmet {...config.app.head} />
        <NavBar user={user} />

        <div className={styles.content}>
          {this.props.children}
        </div>
        <FooterBar />
      </div>
    );
  }
}
