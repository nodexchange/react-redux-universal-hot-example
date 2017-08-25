import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { SectionItem } from 'components';

// eslint-disable-next-line import/extensions, import/no-extraneous-dependencies

export default class About extends Component {

  state = {
    showKitten: false
  };

  handleToggleKitten = () => this.setState({ showKitten: !this.state.showKitten });

  panelCopyObject = () => {
    const copy = [];
    copy.push({
      smallHeader: 'QUARTILE',
      header: 'ABOUT US',
      description: 'We are advocates of simplicity and transparency. With over ten years experience in the advertising business, it is safe to say that we gained excellent exposure and grasp on all industry leading solutions. We place the strongest emphasis on immersive experience design, where we collaborate with our clients to deliver comprehensive solutions that meet their even most demanding business goals. Our agency originated in the very heart of London\'s silicon roundabout, where most of our tech talent was acquired. Get in touch with us, see how our award winning service differs from others.',
      buttonText: 'Contact US',
      sectionClass: 'about',
      link: ''
    });
    return copy;
  }

  render() {
    const styles = require('./About.scss');

    const panelsCopy = this.panelCopyObject();
    return (
      <div className={styles.about}>
        <Helmet title="About" />
        <SectionItem inView key={0} offset={0} order={0} {...panelsCopy[0]} />
      </div>
    );
/*
    const { showKitten } = this.state;
    // eslint-disable-next-line global-require
    const kitten = require('./kitten.jpg');

    return (
      <div className="container">
        <h1>About Us</h1>
        <Helmet title="About Us" />

        <p>This project was originally created by Erik Rasmussen
          (<a href="https://twitter.com/erikras">@erikras</a>), but has since seen many contributions
          from the open source community. Thank you to <a
            href="https://github.com/erikras/react-redux-universal-hot-example/graphs/contributors"
          >all the contributors</a>.
        </p>

        <h3>Mini Bar <span style={{ color: '#aaa' }}>(not that kind)</span></h3>

        <p>
          Hey! You found the mini info bar! The following component is display-only. Note that it shows the same
          time as the info bar.
        </p>

        <MiniInfoBar />

        <h3>Images</h3>

        <p>
          Psst! Would you like to see a kitten?

          <button
            className={`btn btn-${(showKitten ? 'danger' : 'success')}`}
            style={{ marginLeft: 50 }}
            onClick={this.handleToggleKitten}
          >
            {showKitten ? 'No! Take it away!' : 'Yes! Please!'}
          </button>
        </p>

        {showKitten && <div><img src={kitten} alt="" /></div>}
      </div>
    );
    */
  }
}
