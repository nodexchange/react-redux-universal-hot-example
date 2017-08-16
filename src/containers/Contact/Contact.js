/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { ContactItem } from 'components';

export default class Contact extends Component {
  panelCopyObject = () => {
    const copy = [];
    copy.push({
      smallHeader: 'MORE THAN JUST AN',
      header: 'AD AGENCY',
      description: 'Use our team as an extension to yours.\nOur exepertise & creativity are yours to take advantage of.\nThis is where our team excels, this is how it always should be.\nIf you have any questions or would like to pick up brain on something do not hestiate, message us now.',
      buttonText: 'Contact us',
    });
    return copy;
  }

  render() {
    // eslint-disable-next-line global-require
    const styles = require('./Contact.scss');

    const panelsCopy = this.panelCopyObject();
    return (
      <div className={styles.contact}>
        <Helmet title="Contact" />
        <ContactItem inView key={0} order={0} {...panelsCopy[0]} />
      </div>
    );
  }
}
