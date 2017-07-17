import React, { Component, PropTypes } from 'react';

export default class ProductItem extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    info: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    load: PropTypes.func.isRequired
  };

  render() {
    // const { info, load } = this.props; // eslint-disable-line no-shadow
    // eslint-disable-next-line global-require
    const styles = require('./ProductItem.scss');

    return (
      <div className={`${styles.productItem}  well`}>
        <a href="https://www.nylas.com/api/?__hstc=753710.5db36eec91e756a18b05f1cfece2784e.1498413841051.1498413841051.1498413841051.1&amp;__hssc=753710.1.1498413841051&amp;__hsfp=1951577745" target="_self">
          <img src="./Email, calendar, and contacts APIs that power your app _ Nylas Cloud_files/ic-price-tag@2x.png" width="" height="" alt="CRM" sizes="(max-width: 186px) 100vw, 186px" />
          <h2>CRM</h2>
          <p>Import conversations and new contacts across every mailbox &amp; calendar.</p>
          <h6>Learn More</h6>
        </a>
      </div>
    );
  }
}
