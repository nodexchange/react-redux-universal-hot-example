import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class Clients extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    inView: PropTypes.bool,
  };

  render() {
    const styles = require('./Clients.scss');

    return (
      <div className={styles.section}>
        <div className={styles.info}>
          Brands and clients that <b>entrust</b> our solutions and empathy&#8482; algorithm
        </div>
        <div className={styles.clients}>
          <div className={styles.client}>
            <img className={styles.renault} alt="renualt" src="/clients/renault.png" />
          </div>
          <div className={styles.client}>
            <img className={styles.ford} alt="ford" src="/clients/ford.png" />
          </div>
          <div className={styles.client}>
            <img className={styles.audi} alt="audi" src="/clients/audi.png" />
          </div>
          <div className={styles.client}>
            <img className={styles.toyota} alt="toyota" src="/clients/toyota.png" />
          </div>
          <div className={styles.client}>
            <img className={styles.you} alt="you" src="/clients/you.png" />
          </div>
          <div className={styles.client}>
            <img className={styles.gsk} alt="gsk" src="/clients/gsk.png" />
          </div>
          <div className={styles.client}>
            <img className={styles.hme} alt="hme" src="/clients/hme.png" />
          </div>
          <div className={styles.client}>
            <img className={styles.dnno} alt="dnno" src="/clients/dnno.png" />
          </div>
          <div className={styles.client}>
            <img className={styles.inm} alt="inm" src="/clients/inm.png" />
          </div>
        </div>
      </div>
    );
  }
}
