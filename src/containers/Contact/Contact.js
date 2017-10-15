/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Divider, SectionItem } from 'components';

export default class Contact extends Component {
  panelCopyObject = () => {
    const copy = [];
    copy.push({
      smallHeader: 'MORE THAN JUST AN',
      header: 'AD AGENCY',
      // eslint-disable-next-line max-len
      description: 'Use our team as an extension to yours and take advantage of our technical and creative expertise.\nIf you have any questions or would like to pick up brain on something do not hestiate, message us now.',
      buttonText: 'Contact us',
      sectionClass: 'contact',
      link: ''
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
        <SectionItem inView key={0} offset={0} order={0} {...panelsCopy[0]} />
        <Divider />
      </div>
    );
  }
}
