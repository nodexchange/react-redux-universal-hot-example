import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class NotFound extends Component {

  render() {
    const styles = require('./NotFound.scss');

    return (
      <div className={styles.containerNotFound}>
        <h1>Doh! 404!</h1>
        <p>These are <em>not</em> the droids you are looking for!</p>
      </div>
    );
  }
}
