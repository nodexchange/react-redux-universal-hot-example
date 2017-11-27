/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';

// eslint-disable-next-line react/prefer-stateless-function
export default class GridBack extends Component {
  static propTypes = {
    link: PropTypes.string.isRequired
  };
  render() {
    // eslint-disable-next-line global-require
    const styles = require('./GridBack.scss');

    return (
      <Link to={'/' + this.props.link}>
        <div className={styles.gridBack}>{}</div>
      </Link>
    );
  }
}
