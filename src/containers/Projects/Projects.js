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
      header: 'Marvel - 3D Augement Reality takeover',
      description: '',
      imageClass: 'marvel',
      link: 'projects/marvel',
      grid: {
        header: '',
        description: '',
        date: '2017',
        client: 'Netflix',
        demo: 'http://aol.it/2gYubqM'
      }
    }, {
      header: 'AIB - Takeover',
      description: 'Unique interactive wallpaper takeover',
      imageClass: 'marvel',
      link: 'projects/aib',
      grid: {
        header: '',
        description: '',
        date: '2017',
        client: 'independent.ie',
        demo: '[TODO] http://onecreative.aol.com/#ad:361493'
      }
    }, {
      header: 'EBS - Takeover',
      description: 'Projects Desc: http://onecreative.aol.com/view/public?ids=359231&keys=3f822c4afb8d4d299b7f1ddfb0e8e731',
      imageClass: 'marvel',
      link: 'projects/ebs',
      grid: {
        header: '',
        description: '',
        date: '2017',
        client: 'independent.ie',
        demo: '[TODO] http://onecreative.aol.com/#ad:361493'
      }
    }, {
      header: 'Toyota',
      description: '360 banner',
      imageClass: 'marvel',
      link: 'projects/toyota',
      grid: {
        header: '',
        description: '',
        date: '2017',
        client: 'AOL',
        demo: '[TODO] http://onecreative.aol.com/view/public?ids=354387&keys=6bc1d8890bc141d1b53472e57f98f316'
      }
    }, {
      header: '[TODO change video] Ducati',
      description: 'Ducati',
      imageClass: 'marvel',
      link: 'projects/ducati',
      grid: {
        header: '',
        description: '',
        date: '2017',
        client: 'AOL',
        demo: '[TODO] http://onecreative.aol.com/view/public?ids=331744&keys=c594254f5914446ab266bd9f2dc2ff9d&mobile=true'
      }
    }, {
      header: 'Renault Takeover',
      description: 'Renault cross-screen video takeover',
      imageClass: 'marvel',
      link: 'projects/renault',
      grid: {
        header: '',
        description: '',
        date: '2017',
        client: 'AOL',
        demo: '[TODO] http://onecreative.aol.com/#ad:167149'
      }
    });
    return copy;
  }

  render() {
    const styles = require('./Projects.scss');

    // hero as a todo item.
    const projectsGridCopy = this.panelCopyObject();
    const cards = [];
    for (let i = 0; i < projectsGridCopy.length; i++) {
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
        <Divider />
        <Divider />
        <Divider />
      </div>
    );
  }
}
