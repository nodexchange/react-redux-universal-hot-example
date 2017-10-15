/* eslint-disable react/no-unescaped-entities */
import React, { Component, PropTypes } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class GridCard extends Component {
  static propTypes = {
    h2Text: PropTypes.string,
    pText: PropTypes.string
  };
  render() {
    // eslint-disable-next-line global-require
    const styles = require('./GridCard.scss');

    return (
      <li className={styles.gridItem}>
        <h2>{this.props.h2Text}</h2>
        <p>
          {this.props.pText}
        </p>
      </li>
    );
  }
}
