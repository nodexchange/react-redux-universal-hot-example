import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// eslint-disable-next-line import/extensions
import { load } from 'redux/modules/info';

@connect(
    state => ({ info: state.info.data }),
    dispatch => bindActionCreators({ load }, dispatch)
)
export default class FooterBar extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    info: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    load: PropTypes.func.isRequired
  };

  render() {
    // const { info, load } = this.props; // eslint-disable-line no-shadow
    // eslint-disable-next-line global-require
    const styles = require('./FooterBar.scss');
    const certificateImg = require('./soda.png');
    const quartileLogoImg = require('./../../containers/NavBar/quartile-logo.png');

    return (
      <footer className={`${styles.footerbar}  well`}>
        <div className={styles.container}>
          <div className={styles.footerBranding}>
            <div className={styles.logo + ' ' + styles.shadowed}>
              <img src={quartileLogoImg} alt="A super proud member of SoDA" />
            </div>
            <div className={styles.mission}>data, emotions and metrics</div>
          </div>
          <b className={styles.horizontal} />
          <div className={styles.leftContainer}>
            <span className={styles.copyright}>©Quartile 2017. All rights reserved</span>
            <p className={styles.clear}>{''}</p>
            <nav className={styles.footerMenu}>
              <a href="/contact">Contact us</a>
              <a href="https://twitter.com/dogstudio" target="_blank">Twitter</a>
              <a href="https://www.facebook.com/dogstudio" target="_blank">LinkedIn</a>
              <a href="https://www.instagram.com/dogstudio_be/" target="_blank">Instagram</a>
            </nav>
          </div>
          <a href="http://sodaspeaks.com/" target="_blank" className={styles.certification}>
            <img src={certificateImg} alt="A super proud member of SoDA" />
          </a>
        </div>
      </footer>
    );
  }
}
