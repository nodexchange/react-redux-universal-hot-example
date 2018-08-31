import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
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

/*
</footer>
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
            <span className={styles.copyright}>©Quartile 2018. All rights reserved. Icon design by Freepik</span>
            <p className={styles.clear}>{''}</p>
            <nav className={styles.footerMenu}>
              <a href="/contact">Contact us</a>
              <a href="https://twitter.com/HelloQuartile" target="_blank">Twitter</a>
              <a href="https://www.linkedin.com/company-beta/27015742" target="_blank">LinkedIn</a>
              <a href="https://www.instagram.com/quartile_io/" target="_blank">Instagram</a>
            </nav>
          </div>
          <a href="https://www.onebyaol.com/" target="_blank" className={styles.certification}>
            <img src={certificateImg} alt="A certified partner of ONE CREATIVE" />
          </a>
        </div>
      </footer>
*/

  render() {
    // const { info, load } = this.props; // eslint-disable-line no-shadow
    // eslint-disable-next-line global-require
    /* eslint-disable */
    const styles = require('./FooterBar.scss');
    const certificateImg = require('./one.png');
    const quartileLogoImg = require('./../../components/FooterBar/logo.png');

    return (
      <footer>
        <div className={styles.logo}>
          <div className={styles.logosvg} style={{paddingBottom: 33.3 + '%'}}>
            <svg viewBox="0 0 85 28.3">
              <path className={styles.st0} d="M25.9,6.2c-5,0-8.6,2.9-8.6,7.9s3.6,7.9,8.6,7.9c6.5,0,8-4.7,8-4.7h-4.1c0,0-1.1,1.7-3.9,1.7 c-4.4,0-4.9-3.7-4.9-3.7h13.4c0,0,0.1-0.5,0.1-1.2C34.5,9.2,30.8,6.2,25.9,6.2z M21.1,12.7c0,0,0.5-3.4,4.8-3.4 c4.4,0,4.8,3.4,4.8,3.4S21.1,12.7,21.1,12.7z"
                />
              <path className={styles.st0} d="M50.7,0c-1.2,0-2.1,0.7-2.1,1.8s0.8,1.8,2.1,1.8s2.1-0.7,2.1-1.8S52,0,50.7,0z"
                />
              <rect x="49" y="6.5" className={styles.st0} width="3.5" height="15.3" />
              <path className={styles.st0} d="M81.2,6.5l-4.6,11.6h-0.2L71.3,6.5h-3.7l7.2,15.9l-0.1,0.3c-0.8,1.9-1.7,2.4-2.9,2.4c-1.1,0-3.8,0-3.8,0v3.2 h4.1c3.1,0,4.9-2.5,6.2-5.6L85,6.5H81.2z" />
              <path className={styles.st0} d="M60.5,15.8V9.5h5.7v-3h-5.7V3.1h-2.3l-3.7,4.2v2.2H57v6.7c0,4.2,1.5,5.8,5.9,5.8c1.8,0,3.7-0.2,3.7-0.2v-3.1 c0,0-2.1,0.1-3.4,0.1C61.7,18.8,60.5,18.4,60.5,15.8z" />
              <path className={styles.st0} d="M40.1,7.7V6.5h-3.5v15.3h3.5v-9.7c0.5-1.5,1.9-2.6,4.3-2.6h2.7v-3h-2.4C42.1,6.5,40.8,7.2,40.1,7.7z" />
              <polygon className={styles.st0} points="8.6,19.1 8.5,19.1 3.7,6.5 0,6.5 6,21.8 11.1,21.8 17.1,6.5 13.5,6.5"
                />
            </svg>
          </div>
        </div>
        <div className={styles.copyright}>© Quartile. All rights reserved.</div>
        <section className={styles.center + ' ' + styles.a}>
          <h4>Get in Touch</h4>
          <p>Verity Studios AG<br/>Binzmühlestrasse 81<br/>8050 Zurich<br/>Switzerland<br/><br/><a href="tel:+41-445338360">+41 44 533 83 60</a><br/><a href="mailto:info@veritystudios.com">info@veritystudios.com</a><br/><a href="https://veritystudios.atlassian.net/servicedesk/customer/portal" target="_blank">Customer Support Portal Login</a></p>
        </section>
        <section className={styles.center + ' ' + styles.b + ' ' + styles.onsite}>
          <h4>Assistance</h4>
          <a href="contact">Contact</a>
          <a href="faq">FAQs</a>
          <a href="legal">Legal Notices</a>
        </section>
        <section className={styles.social}>
          <h4>Follow</h4>
          <a href="https://www.instagram.com/veritystudios/" target="_blank">
            <svg viewBox="0 0 20 20">
              <path className={styles.st0} d="M510,160c-2.7,0-3.1,0-4.1,0.1c-1.1,0-1.8,0.2-2.4,0.5c-0.7,0.3-1.2,0.6-1.8,1.2 c-0.6,0.6-0.9,1.1-1.2,1.8c-0.2,0.6-0.4,1.4-0.5,2.4c0,1.1-0.1,1.4-0.1,4.1c0,2.7,0,3.1,0.1,4.1c0,1.1,0.2,1.8,0.5,2.4 c0.3,0.7,0.6,1.2,1.2,1.8c0.6,0.6,1.1,0.9,1.8,1.2c0.6,0.2,1.4,0.4,2.4,0.5c1.1,0,1.4,0.1,4.1,0.1c2.7,0,3.1,0,4.1-0.1 c1.1,0,1.8-0.2,2.4-0.5c0.7-0.3,1.2-0.6,1.8-1.2c0.6-0.6,0.9-1.1,1.2-1.8c0.2-0.6,0.4-1.4,0.5-2.4c0-1.1,0.1-1.4,0.1-4.1 c0-2.7,0-3.1-0.1-4.1c0-1.1-0.2-1.8-0.5-2.4c-0.3-0.7-0.6-1.2-1.2-1.8c-0.6-0.6-1.1-0.9-1.8-1.2c-0.6-0.2-1.4-0.4-2.4-0.5 C513.1,160,512.7,160,510,160z M510,161.8c2.7,0,3,0,4,0.1c1,0,1.5,0.2,1.9,0.3c0.5,0.2,0.8,0.4,1.1,0.7c0.3,0.3,0.6,0.7,0.7,1.1 c0.1,0.4,0.3,0.9,0.3,1.9c0,1.1,0.1,1.4,0.1,4c0,2.7,0,3-0.1,4c0,1-0.2,1.5-0.3,1.9c-0.2,0.5-0.4,0.8-0.7,1.1 c-0.3,0.3-0.7,0.6-1.1,0.7c-0.4,0.1-0.9,0.3-1.9,0.3c-1.1,0-1.4,0.1-4,0.1c-2.7,0-3,0-4-0.1c-1,0-1.5-0.2-1.9-0.3 c-0.5-0.2-0.8-0.4-1.1-0.7c-0.3-0.3-0.6-0.7-0.7-1.1c-0.1-0.4-0.3-0.9-0.3-1.9c0-1.1-0.1-1.4-0.1-4c0-2.7,0-3,0.1-4 c0-1,0.2-1.5,0.3-1.9c0.2-0.5,0.4-0.8,0.7-1.1c0.3-0.3,0.7-0.6,1.1-0.7c0.4-0.1,0.9-0.3,1.9-0.3C507,161.8,507.3,161.8,510,161.8z M510,164.9c-2.8,0-5.1,2.3-5.1,5.1c0,2.8,2.3,5.1,5.1,5.1c2.8,0,5.1-2.3,5.1-5.1C515.1,167.2,512.8,164.9,510,164.9z M510,173.3 c-1.8,0-3.3-1.5-3.3-3.3c0-1.8,1.5-3.3,3.3-3.3c1.8,0,3.3,1.5,3.3,3.3C513.3,171.8,511.8,173.3,510,173.3z M516.5,164.7 c0,0.7-0.5,1.2-1.2,1.2c-0.7,0-1.2-0.5-1.2-1.2s0.5-1.2,1.2-1.2C516,163.5,516.5,164,516.5,164.7z"
                transform="translate(-500 -160)" />
            </svg>
          </a>
          <a href="https://twitter.com/verity_studios" target="_blank">
            <svg viewBox="0 0 20 16.7">
              <path className={styles.st0} d="M320,166c-0.7,0.3-1.5,0.6-2.4,0.7c0.8-0.5,1.5-1.3,1.8-2.3c-0.8,0.5-1.7,0.8-2.6,1 c-0.7-0.8-1.8-1.3-3-1.3c-2.3,0-4.1,1.9-4.1,4.2c0,0.3,0,0.7,0.1,1c-3.4-0.2-6.4-1.8-8.5-4.4c-0.4,0.6-0.6,1.3-0.6,2.1 c0,1.5,0.7,2.7,1.8,3.5c-0.7,0-1.3-0.2-1.9-0.5v0.1c0,2,1.4,3.7,3.3,4.1c-0.3,0.1-0.7,0.1-1.1,0.1c-0.3,0-0.5,0-0.8-0.1 c0.5,1.7,2,2.9,3.8,2.9c-1.4,1.1-3.2,1.8-5.1,1.8c-0.3,0-0.7,0-1-0.1c1.8,1.2,4,1.9,6.3,1.9c7.5,0,11.7-6.4,11.7-12 c0-0.2,0-0.4,0-0.5C318.8,167.6,319.5,166.8,320,166"
                transform="translate(-300 -164)" />
            </svg>
          </a>
          <a href="https://www.facebook.com/theveritystudios" target="_blank">
            <svg id="Isolation_Mode" data-name="Isolation Mode" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 8.16 15.63">
              <path className={styles.st0} d="M70.94,76.45c.48,0,1,0,1.45,0h.2V73.93c-.26,0-.53-.06-.8-.08-.5,0-1,0-1.49,0a3.65,3.65,0,0,0-2.1.65,3.15,3.15,0,0,0-1.27,2.1,7.39,7.39,0,0,0-.09,1.08c0,.57,0,1.13,0,1.7v.21H64.43v2.81h2.4v7.07h2.93V82.39h2.39l.37-2.83H69.73s0-1.39,0-2C69.78,76.73,70.27,76.48,70.94,76.45Z"
                transform="translate(-64.43 -73.81)" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/5072126" target="_blank">
            <svg viewBox="0 0 14.52 14.49" xmlns="http://www.w3.org/2000/svg">
              <g fill="#fff">
                <path className={styles.st0} d="m175.31 79.17h3v9.68h-3zm1.51-4.81a1.74 1.74 0 1 1 -1.75 1.74 1.74 1.74 0 0 1 1.75-1.74"
                  transform="translate(-175.07 -74.36)" />
                <path className={styles.st0} d="m180.21 79.17h2.89v1.32a3.16 3.16 0 0 1 2.9-1.56c3 0 3.61 2 3.61 4.61v5.31h-3v-4.71c0-1.12 0-2.57-1.56-2.57s-1.8 1.22-1.8 2.48v4.79h-3z"
                  transform="translate(-175.07 -74.36)" />
              </g>
            </svg>
          </a>
        </section>
      </footer>

    );
  }
}
