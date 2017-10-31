import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as copyActions from 'redux/modules/copy';
import Helmet from 'react-helmet';
import { Divider, GridCard, Hero } from 'components';

// eslint-disable-next-line import/extensions, import/no-extraneous-dependencies
@connect(
  state => ({ localeCopy: state.copy.localeCopy }),
  copyActions
)

export default class Projects extends Component {
  static propTypes = {
    loadCopy: PropTypes.func.isRequired,
    localeCopy: PropTypes.object // eslint-disable-line react/forbid-prop-types
  }
  constructor(props) {
    super(props);
    this.localeCopy = this.props.localeCopy || 'pending';
  }
  componentDidMount() {
    this.props.loadCopy('projects');
  }
  selectRandomQuote() {
    const quotes = this.props.localeCopy.quotes;
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  render() {
    const styles = require('./Projects.scss');

    // hero as a todo item.
    const projectsGridCopy = this.props.localeCopy.data;
    const cards = [];
    if (!projectsGridCopy) {
      return (<p>empty</p>);
    }
    for (let i = 0; i < projectsGridCopy.length; i++) {
      cards.push(<GridCard key={i} order={i} {...projectsGridCopy[i]} />);
    }
    const quote = this.selectRandomQuote();
    console.log('quote', quote);
    // {cards}
    return (
      <div className={styles.projects}>
        <Helmet title="Projects" />
        <Hero smallHeader={'"' + quote.text + '"'} smallText={quote.author} background="narrow" />
        <div className={styles.section}>
          <ul className={styles.grid + ' ' + styles.cards}>
            {cards}
          </ul>
        </div>
        <Divider />
        <Divider />
        <Divider />
        <Divider />
      </div>
    );
  }
}
