import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as copyActions from 'redux/modules/copy';
import * as scrollActions from 'redux/modules/scroll';
import Helmet from 'react-helmet';
import { Divider, GridCard, Hero } from 'components';

// eslint-disable-next-line import/extensions, import/no-extraneous-dependencies
@connect(
  state => ({ localeCopy: state.copy.localeCopy }),
  dispatch => bindActionCreators({ ...scrollActions, ...copyActions }, dispatch)
)

export default class Work extends Component {
  static propTypes = {
    loadCopy: PropTypes.func.isRequired,
    localeCopy: PropTypes.oneOfType([
      PropTypes.object, // eslint-disable-line react/forbid-prop-types
      PropTypes.array // eslint-disable-line react/forbid-prop-types
    ]),
    updateMaxPages: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
    this.localeCopy = this.props.localeCopy || 'pending';
  }
  componentDidMount() {
    this.props.loadCopy('work');
    this.props.updateMaxPages(1);
  }
  selectRandomQuote() {
    const quotes = this.props.localeCopy.quotes;
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  render() {
    const styles = require('./Work.scss');

    // hero as a todo item.
    const projectsGridCopy = this.props.localeCopy.data;
    const cards = [];
    if (!projectsGridCopy || !this.props.localeCopy.quotes) {
      return (<p>Loading...</p>);
    }
    for (let i = 0; i < projectsGridCopy.length; i++) {
      cards.push(<GridCard key={i} order={i} {...projectsGridCopy[i]} />);
    }
    const quote = this.selectRandomQuote();
    // {cards}
    return (
      <div className={styles.projects}>
        <Helmet title="Our Work" />
        <Hero smallHeader={'"' + quote.text + '"'} smallText={quote.author} background="narrow" />
        <div className={styles.section}>
          <ul className={styles.grid + ' ' + styles.cards}>
            {cards}
          </ul>
        </div>
        <Divider colour="" />
        <Divider colour="" />
        <Divider colour="" />
        <Divider colour="" />
      </div>
    );
  }
}
