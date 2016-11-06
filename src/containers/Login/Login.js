/* eslint-disable react/no-unescaped-entities */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

// eslint-disable-next-line import/extensions
import * as authActions from 'redux/modules/auth';

@connect(
  state => ({ user: state.auth.user }),
  authActions
)
export default class Login extends Component {
  static propTypes = {
    user: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    login: PropTypes.func,
    logout: PropTypes.func
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.username.value);
    this.username.value = '';
  };

  render() {
    const { user, logout } = this.props;
    // eslint-disable-next-line global-require
    const styles = require('./Login.scss');

    return (
      <div className={`${styles.loginPage} container`}>
        <Helmet title="Login" />
        <h1>Login</h1>
        {!user &&
        <div>
          <form className="login-form form-inline" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                ref={(c) => { this.username = c; }}
                placeholder="Enter a username" className="form-control"
              />
            </div>
            <button className="btn btn-success" onClick={this.handleSubmit}><i className="fa fa-sign-in" />{' '}Log In
            </button>
          </form>
          <p>This will "log you in" as this user, storing the username in the session of the API server.</p>
        </div>
        }
        {user &&
        <div>
          <p>You are currently logged in as {user.name}.</p>

          <div>
            <button className="btn btn-danger" onClick={logout}><i className="fa fa-sign-out" />{' '}Log Out</button>
          </div>
        </div>
        }
      </div>
    );
  }
}
