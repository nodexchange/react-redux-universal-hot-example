/* eslint-disable react/no-unescaped-entities */
import React, { Component, PropTypes } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class SectionText extends Component {
  static propTypes = {
    header: PropTypes.string.isRequired,
    copy: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired
  };
  render() {
    // eslint-disable-next-line global-require
    const styles = require('./SectionText.scss');

    return (
      <div className={styles.sectionText}>
        <div className={styles.inner}>
          <div className={styles.header}>{this.props.header}</div>
          <div className={styles.main}>{this.props.copy}</div>
          <div className={styles.tagsTitle}>categories:</div>
          <div className={styles.tags}>{this.props.tags}</div>
        </div>
      </div>
    );
  }
}
