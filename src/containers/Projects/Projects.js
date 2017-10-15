import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Divider, Hero } from 'components';

// eslint-disable-next-line import/extensions, import/no-extraneous-dependencies

export default class Projects extends Component {

  state = {
    showKitten: false
  };

  handleToggleKitten = () => this.setState({ showKitten: !this.state.showKitten });

  panelCopyObject = () => {
    const copy = [];
    copy.push({
      smallHeader: 'QUARTILE',
      header: 'Projects',
      description: 'We are advocates of simplicity and transparency. With over ten years experience in the advertising business, it is safe to say that we gained excellent exposure and grasp on all industry leading solutions. We place the strongest emphasis on immersive experience design, where we collaborate with our clients to deliver comprehensive solutions that meet their even most demanding business goals. Our agency originated in the very heart of London\'s silicon roundabout, where most of our tech talent was acquired. Get in touch with us, see how our award winning service differs from others.',
      buttonText: 'Projects',
      sectionClass: 'projects',
      link: ''
    });
    return copy;
  }

  render() {
    const styles = require('./Projects.scss');

    // const panelsCopy = this.panelCopyObject();
    // hero as a todo item.
    return (
      <div className={styles.projects}>
        <Helmet title="Projects" />
        <Hero title="Projects" />
        <div className={styles.section}>
          <ul className={styles.grid + ' ' + styles.cards}>
            <li><h2>Card 1</h2>
              <p>Posuere varius ullamcorper ipsum adipiscing dignissim ipsum adipiscing a a quisque malesuada quam purus venenatis sagittis fermentum parturient curabitur montes a metus.
              </p></li>
            <li><h2>Card 2</h2>
              <p>Posuere varius ullamcorper ipsum adipiscing dignissim ipsum adipiscing a a quisque malesuada quam purus venenatis sagittis fermentum parturient curabitur montes a metus.
              </p></li>
            <li><h2>Card 3</h2>
              <p>Posuere varius ullamcorper ipsum adipiscing dignissim ipsum adipiscing a a quisque malesuada quam purus venenatis sagittis fermentum parturient curabitur montes a metus.
              </p></li>
            <li><h2>Card 4</h2>
              <p>Posuere varius ullamcorper ipsum adipiscing dignissim ipsum adipiscing a a quisque malesuada quam purus venenatis sagittis fermentum parturient curabitur montes a metus.
              </p></li>
            <li><h2>Card 5</h2>
              <p>Posuere varius ullamcorper ipsum adipiscing dignissim ipsum adipiscing a a quisque malesuada quam purus venenatis sagittis fermentum parturient curabitur montes a metus.
              </p></li>
          </ul>
        </div>
        <Divider />
      </div>
    );
  }
}
