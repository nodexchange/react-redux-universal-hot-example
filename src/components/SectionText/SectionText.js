/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class SectionText extends Component {
  static propTypes = {
    copy: PropTypes.string,
    tags: PropTypes.string
  };
  render() {
    // eslint-disable-next-line global-require
    const styles = require('./SectionText.scss');

    return (
      <div className={styles.sectionText}>
        <div className={styles.inner}>
          <div className={styles.header}>project details:</div>
          <div className={styles.main}>{this.props.copy}</div>
          <div className={styles.tagsTitle}>categories:</div>
          <div className={styles.tags}>{this.props.tags}</div>
        </div>
      </div>
    );
  }
}
