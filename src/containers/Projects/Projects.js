import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Divider, GridCard, Hero } from 'components';

// eslint-disable-next-line import/extensions, import/no-extraneous-dependencies

export default class Projects extends Component {

  state = {
    showKitten: false
  };

  handleToggleKitten = () => this.setState({ showKitten: !this.state.showKitten });

  panelCopyObject = () => {
    const copy = [];
    copy.push({
      header: 'First Project',
      description: 'Projects Desc',
      link: 'projects/first'
    }, {
      header: 'project 2',
      description: 'Projects Desc',
      link: 'projects/second'
    }, {
      header: 'project 3',
      description: 'Projects Desc',
      link: 'projects/third'
    }, {
      header: 'project 4',
      description: 'Projects Desc',
      link: 'projects/fourth'
    }, {
      header: 'project 5',
      description: 'Projects Desc',
      link: 'projects/fifth'
    },
    );
    return copy;
  }

  render() {
    const styles = require('./Projects.scss');

    // hero as a todo item.
    const projectsGridCopy = this.panelCopyObject();
    const cards = [];
    for (let i = 0; i < 5; i++) {
      cards.push(<GridCard key={i} order={i} {...projectsGridCopy[i]} />);
    }
    // {cards}
    return (
      <div className={styles.projects}>
        <Helmet title="Projects" />
        <Hero title="Projects" />
        <div className={styles.section}>
          <ul className={styles.grid + ' ' + styles.cards}>
            {cards}
          </ul>
        </div>
        <Divider />
      </div>
    );
  }
}
