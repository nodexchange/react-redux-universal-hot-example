/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as copyActions from 'redux/modules/copy';
import * as scrollActions from 'redux/modules/scroll';
import Helmet from 'react-helmet';
import { Divider, SectionItem } from 'components';

@connect(
  state => ({ localeCopy: state.copy.localeCopy }),
  dispatch => bindActionCreators({ ...scrollActions, ...copyActions }, dispatch)
)
export default class Contact extends Component {
  static propTypes = {
    loadCopy: PropTypes.func.isRequired,
    localeCopy: PropTypes.oneOfType([
      PropTypes.object, // eslint-disable-line react/forbid-prop-types
      PropTypes.array // eslint-disable-line react/forbid-prop-types
    ]),
    updateMaxPages: PropTypes.func.isRequired
  }
  componentDidMount() {
    this.props.loadCopy('contact');
    this.props.updateMaxPages(1);
  }

  defaultCopy = () => (
    'Let us show you how data, emotions and metrics can transform your business. If you have any questions or simply want to challenge us, do not hesitate, message us now.'
   )

  render() {
    // eslint-disable-next-line global-require
    const styles = require('./Contact.scss');

    const contactCopy = this.props.localeCopy.data;
    if (!contactCopy) {
      return (<p>{this.defaultCopy()}</p>);
    }

    return (
      <div className={styles.contact}>
        <Helmet title="Contact" />
        <SectionItem inView key={0} offset={0} order={0} {...contactCopy[0]} link="contact" />
        <Divider colour="orange" />
      </div>
    );
  }
}
