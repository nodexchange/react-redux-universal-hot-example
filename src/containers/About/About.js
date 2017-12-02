import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as copyActions from 'redux/modules/copy';
import Helmet from 'react-helmet';
import { Divider, SectionItem } from 'components';

// eslint-disable-next-line import/extensions, import/no-extraneous-dependencies
@connect(
  state => ({ localeCopy: state.copy.localeCopy }),
  copyActions
)
export default class About extends Component {
  static propTypes = {
    loadCopy: PropTypes.func.isRequired,
    localeCopy: PropTypes.oneOfType([
      PropTypes.object, // eslint-disable-line react/forbid-prop-types
      PropTypes.array // eslint-disable-line react/forbid-prop-types
    ])
  }
  componentDidMount() {
    this.props.loadCopy('about');
  }

  defaultCopy = () => (
    'We are advocates of simplicity and transparency. It is safe to say that we gained excellent exposure and grasp in all industry-leading RichMedia and advertising solutions.'
  )

  render() {
    // eslint-disable-next-line global-require
    const styles = require('./About.scss');

    const aboutCopy = this.props.localeCopy.data;
    if (!aboutCopy) {
      return (<p>{this.defaultCopy()}</p>);
    }

    return (
      <div className={styles.about}>
        <Helmet title="About" />
        <SectionItem inView key={0} offset={0} order={0} {...aboutCopy[0]} link="about" />
        <Divider colour="white" />
      </div>
    );
  }
}
