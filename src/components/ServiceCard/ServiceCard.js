/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';

// eslint-disable-next-line react/prefer-stateless-function
export default class ServiceCard extends Component {
  static propTypes = {
    header: PropTypes.string,
    description: PropTypes.string,
    imageClass: PropTypes.string,
    order: PropTypes.number,
    link: PropTypes.string.isRequired
  };
  render() {
    // eslint-disable-next-line global-require
    const styles = require('./ServiceCard.scss');

    return (
      <li className={styles.gridItem + ' ' + styles['grid' + this.props.order]}>
        <Link to={'/' + this.props.link}>
          <div className={styles.gridBackground + ' ' + styles[this.props.imageClass]} />
          <div className={styles.gridTitle}>
            <h2>{this.props.header}</h2>
            <p>
              {this.props.description}
            </p>
          </div>
        </Link>
      </li>
    );
  }
}
