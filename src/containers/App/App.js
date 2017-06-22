import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Helmet from 'react-helmet';
import { push } from 'react-router-redux';
import { asyncConnect } from 'redux-async-connect';

// eslint-disable-next-line import/extensions
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
// eslint-disable-next-line import/extensions
import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import { InfoBar } from 'components';
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
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/" activeStyle={{ color: '#33e0ff' }}>
                <div className={styles.brand} />
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse eventKey={0}>
            <Nav navbar className={styles.navBar}>
              {user && <LinkContainer to="/chat">
                <NavItem eventKey={1}>Chat</NavItem>
              </LinkContainer>}
              <LinkContainer to="/">
                <NavItem eventKey={0}>Home</NavItem>
              </LinkContainer>
              <LinkContainer to="/solutions">
                <NavItem eventKey={2}>Solutions</NavItem>
              </LinkContainer>
              <LinkContainer to="/products">
                <NavItem eventKey={2}>Products</NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavItem eventKey={2}>About</NavItem>
              </LinkContainer>
              <LinkContainer to="/blog">
                <NavItem eventKey={2}>Blog</NavItem>
              </LinkContainer>
              <LinkContainer to="/widgets">
                <NavItem eventKey={2}>Widgets</NavItem>
              </LinkContainer>
              <LinkContainer to="/canvas">
                <NavItem eventKey={5}>Canvas</NavItem>
              </LinkContainer>
            </Nav>
            {user &&
            <p className={`${styles.loggedInMessage} navbar-text`}>Logged in as <strong>{user.name}</strong>.</p>}
            <Nav navbar pullRight>
              <LinkContainer to="/login" className={styles.btn + ' ' + styles.btnBlue}>
                <NavItem eventKey={1}>
                  Login <i className="fa fa-sign-in" id={styles.envolopeIcon} />
                </NavItem>
              </LinkContainer>
              <LinkContainer
                className={styles.btn + ' ' + styles.btnRed}
                to="/survey"
              >
                <NavItem eventKey={2}>
                  Contact <i className="fa fa-envelope" id={styles.envolopeIcon} />
                </NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className={styles.appContent}>
          {this.props.children}
        </div>
        <InfoBar />

        <div className="well text-center">
          Have questions? Ask for help
          <a
            href="https://github.com/erikras/react-redux-universal-hot-example/issues"
            target="_blank" rel="noopener noreferrer"
          >on Github</a> or in the
          <a
            href="https://discord.gg/0ZcbPKXt5bZZb1Ko" target="_blank" rel="noopener noreferrer"
          >#react-redux-universal</a> Discord channel.
        </div>
      </div>
    );
  }
}
