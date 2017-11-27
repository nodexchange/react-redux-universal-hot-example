/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { IndexLink, Link, browserHistory } from 'react-router';

// eslint-disable-next-line import/extensions, import/no-extraneous-dependencies
// import config from '../../config';

// eslint-disable-next-line react/prefer-stateless-function
export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { navbar: 'sticky', location: '' };
  }

  componentDidMount() {
    window.addEventListener('scroll', (e) => { this.mScrollHandler(e); });
    browserHistory.listen(() => {
      this.showLoader();
    });
    this.showLoader();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', (e) => { this.mScrollHandler(e); });
    this.state = {};
  }

  showLoader = () => {
    if (document) {
      const navLoader = document.getElementById('navLoader');
      navLoader.style.visibility = 'visible';
      setTimeout(() => {
        navLoader.style.visibility = 'hidden';
      }, 3200);
    }
  }

  scrollPageHandler = (e) => {
    console.log('Math.random ' + Math.random() + ' e ' + e);
  }

  mScrollHandler = () => {
    const currentTop = window.pageYOffset;
    const scrollPercentage = Math.round((currentTop / document.body.clientHeight) * 100);
    if (scrollPercentage > 20) {
      if (this.state) {
        if (this.state.navbar !== 'scroll') {
          this.setState({ navbar: 'scroll' });
        }
        return;
      }
    } else {
      if (this.state.navbar !== 'sticky') {
        this.setState({ navbar: 'sticky' });
      }
      return;
    }
  }
  mobileNavClickHandler = () => {
    if (this.state) {
      if (this.state.mobileNav === 'open-nav') {
        this.setState({ mobileNav: '' });
        return;
      }
      this.setState({ mobileNav: 'open-nav' });
    }
  }
  navClickHandler = () => {
    if (this.state) {
      if (this.state.mobileNav === 'open-nav') {
        this.setState({ mobileNav: '' });
      }
    }
  }

  render() {
    // eslint-disable-next-line global-require
    const styles = require('./NavBar.scss');

    let navType = styles.sticky;
    let mobileNavType = 'close-nav';
    let brandType = styles.brandNormal;
    if (this.state) {
      if (this.state.navbar === 'scroll') {
        navType = styles.scroll;
        brandType = styles.brandScrolled;
      }
      if (this.state.mobileNav === 'open-nav') {
        mobileNavType = styles.openNav;
      }
    }
    /* eslint-disable */
    return (
      <header className={styles.mainHeader + ' ' + navType + ' ' + mobileNavType }>
        <div className={styles.row}>
          <IndexLink to="/" activeStyle={{ color: '#33e0ff' }}>
            <div className={styles.brand + ' ' + brandType} />
          </IndexLink>
          <div
            role="button"
            tabIndex="0"
            className={styles.mobileToggle}
            onClick={this.mobileNavClickHandler}>
            <span>{}</span>
            <span>{}</span>
            <span>{}</span>
          </div>
          <nav className={styles.navBar}>
            <ul>
              <li><Link to="/" onClick={this.navClickHandler}>Home</Link></li>
              <li><Link to="/projects" onClick={this.navClickHandler}>Projects</Link></li>
              <li><Link to="/about" onClick={this.navClickHandler}>About</Link></li>
              <li><Link to="/contact" onClick={this.navClickHandler}>Contact Us</Link></li>
            </ul>
          </nav>
          <div id="navLoader" className={styles.loader} />
        </div>
      </header>
    );
    /* eslint-enable */
  }
}
