/* eslint-disable react/no-unescaped-entities */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as copyActions from 'redux/modules/copy';
import Helmet from 'react-helmet';
import { Divider, SectionItem } from 'components';

@connect(
  state => ({ localeCopy: state.copy.localeCopy }),
  copyActions
)
export default class Contact extends Component {
  static propTypes = {
    loadCopy: PropTypes.func.isRequired,
    localeCopy: PropTypes.oneOfType([
      PropTypes.object, // eslint-disable-line react/forbid-prop-types
      PropTypes.array // eslint-disable-line react/forbid-prop-types
    ])
  }
  componentDidMount() {
    this.props.loadCopy('contact');
  }

  render() {
    // eslint-disable-next-line global-require
    const styles = require('./Contact.scss');

    const contactCopy = this.props.localeCopy.data;
    if (!contactCopy) {
      return (<p>Loading...</p>);
    }

    return (
      <div className={styles.contact}>
        <Helmet title="Contact" />
        <SectionItem inView key={0} offset={0} order={0} {...contactCopy[0]} />
        <Divider />
      </div>
    );
  }
}
