import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as copyActions from 'redux/modules/copy';
import * as scrollActions from 'redux/modules/scroll';
import Helmet from 'react-helmet';
import { Divider, ServiceCard } from 'components';

// eslint-disable-next-line import/extensions, import/no-extraneous-dependencies
@connect(
  state => ({ localeCopy: state.copy.localeCopy }),
  dispatch => bindActionCreators({ ...scrollActions, ...copyActions }, dispatch)
)
export default class Services extends Component {
  static propTypes = {
    loadCopy: PropTypes.func.isRequired,
    localeCopy: PropTypes.oneOfType([
      PropTypes.object, // eslint-disable-line react/forbid-prop-types
      PropTypes.array // eslint-disable-line react/forbid-prop-types
    ]),
    updateMaxPages: PropTypes.func.isRequired
  }
  componentDidMount() {
    this.props.loadCopy('services');
    this.props.updateMaxPages(1);
  }

  defaultCopy = () => (
    'We are advocates of simplicity and transparency. It is safe to say that we gained excellent exposure and grasp in all industry-leading RichMedia and advertising solutions.'
  )

  render() {
    // eslint-disable-next-line global-require
    const styles = require('./Services.scss');

    const servicesCopy = this.props.localeCopy.data;
    if (!servicesCopy) {
      return (<p>{this.defaultCopy()}</p>);
    }
    const cards = [];
    for (let i = 0; i < servicesCopy.length; i++) {
      cards.push(<ServiceCard key={i} order={i} {...servicesCopy[i]} />);
    }

    return (
      <div className={styles.services}>
        <Helmet title="Services" />
        <div className={styles.heartBackground}>{' '}</div>
        <div className={styles.section}>
          <ul className={styles.grid + ' ' + styles.cards}>
            {cards}
          </ul>
        </div>
        <Divider colour="" />
        <Divider colour="" />
        <Divider colour="" />
      </div>
    );
  }
}
