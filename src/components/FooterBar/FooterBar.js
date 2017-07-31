import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// eslint-disable-next-line import/extensions
import { load } from 'redux/modules/info';

@connect(
    state => ({ info: state.info.data }),
    dispatch => bindActionCreators({ load }, dispatch)
)
export default class FooterBar extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    info: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    load: PropTypes.func.isRequired
  };

  render() {
    const { info, load } = this.props; // eslint-disable-line no-shadow
    // eslint-disable-next-line global-require
    const styles = require('./FooterBar.scss');

    return (
      <div className={`${styles.infoBar}  well`}>
        <div className="container">
          This is an info bar
          {' '}
          <strong>{info ? info.message : 'no info!'}</strong>
          <span className={styles.time}>{info && new Date(info.time).toString()}</span>
          <button className="btn btn-primary" onClick={load}>Reload from server</button>
        </div>
      </div>
    );
  }
}
