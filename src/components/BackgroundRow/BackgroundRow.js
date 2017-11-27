import React, { Component } from 'react';

import { PropTypes } from 'prop-types';

export default class BackgroundRow extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    info: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    load: PropTypes.func.isRequired
  };

  render() {
    // const { info, load } = this.props; // eslint-disable-line no-shadow
    // eslint-disable-next-line global-require
    const styles = require('./BackgroundRow.scss');

    return (
      <div className={`${styles.backgroundRow} ${styles.section}`} />
    );
  }
}
