/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import Helmet from 'react-helmet';

// eslint-disable-next-line import/extensions, import/no-extraneous-dependencies
import { Arrow, Canvas, VideoPlayer } from 'components';
import config from '../../config';

// eslint-disable-next-line react/prefer-stateless-function
export default class Home extends Component {
  render() {
    // eslint-disable-next-line global-require
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    // eslint-disable-next-line global-require
    /*
        <div className={styles.section}>
          <ProductItem />
        </div>
        <div className={styles.section}>
          <BackgroundRow />
        </div>
    */
    return (
      <div className={styles.home}>
        <Helmet title="Home" />
        <div className={styles.masthead}>
          <div className={styles.mastheadCopy}>
            <h1>We are {config.app.title}</h1>
            <h2>{config.app.description}</h2>
            <p>
              <a
                className={styles.github}
                href="https://github.com/erikras/react-redux-universal-hot-example"
              >
                <i className="fa fa-github" /> View on Github
              </a>
            </p>
            <p className={styles.humility}>
              Created and maintained by <a href="https://twitter.com/erikras">@erikras</a>.
            </p>
          </div>
          <div className={styles.mastheadVideo}>
            <VideoPlayer src="/test.mp4" type="video/mp4" width="100%" />
          </div>
        </div>
        <div className={styles.section}>
          <Canvas h1Text="Programmatic Data-driven RichMedia products" />
        </div>
        <div className={styles.section}>
          <dl>
            <dt>Machine Learning algorithm</dt>
          </dl>
          <Arrow />
        </div>
      </div>
    );
  }
}
