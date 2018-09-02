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
    browserHistory.listen((e) => {
      if (e.pathname !== this.state.location) {
        this.showLoader();
        this.setState({ location: e.pathname });
      }
    });
    this.showLoader();
    this.saveLocation();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', (e) => { this.mScrollHandler(e); });
    this.state = {};
  }

  saveLocation() {
    if (this.state.location === '') {
      this.setState({ location: browserHistory.getCurrentLocation().pathname });
    }
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

  scrollPageHandler = () => {
    // console.log('Math.random ' + Math.random() + ' e ' + e);
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

  retrieveIframeElement = () => {
    const iframeElement = '<iframe frameborder=0 scrolling=no src="/logo-animation-completed.html" width="250" height="90"></iframe>';
    return {
      __html: iframeElement
    };
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
    const navConfig = [
      {
        to: '/about', name: 'About Us', className: '', onClick: this.navClickHandler
      },
      {
        to: '/work', name: 'Our Work', className: '', onClick: this.navClickHandler
      },
      {
        to: '/services', name: 'What we do', className: '', onClick: this.navClickHandler
      },
      {
        to: '/contact', name: 'Contact', className: 'contactUsButton', onClick: this.navClickHandler
      }
    ];
    const navButtons = [];

    for (let i = 0; i < navConfig.length; i++) {
      if (this.state.location === navConfig[i].to) {
        navButtons.push(
          <li key={'navBtn' + i}><Link className={styles.activeNavButton + ' ' + styles[navConfig[i].className]} to={navConfig[i].to} onClick={navConfig[i].onClick}>{navConfig[i].name}</Link></li>
        );
      } else {
        navButtons.push(
          <li key={'navBtn' + i}><Link className={styles[navConfig[i].className]} to={navConfig[i].to} onClick={navConfig[i].onClick}>{navConfig[i].name}</Link></li>
        );
      }
    }

    const logo = [];
    try {
      if (window.location.host !== 'localhost:3000') {
        logo.push(
          <IndexLink to="/" activeStyle={{ color: '#33e0ff' }}>
            <div className={styles.brandClick} />
            <div className={styles.brand + ' ' + brandType}>
              <div dangerouslySetInnerHTML={this.retrieveIframeElement()} />
            </div>
          </IndexLink>
        );
      } else {
        logo.push(
          <IndexLink to="/" activeStyle={{ color: '#33e0ff' }}>
            <div className={styles.brandClick} />
          </IndexLink>
        );
      }
    } catch (e) {
      logo.push(
        <IndexLink to="/" activeStyle={{ color: '#33e0ff' }}>
          <div className={styles.brandClick} />
        </IndexLink>
      );
    }

    /* eslint-disable */
    return (
      <header className={styles.mainHeader + ' ' + navType + ' ' + mobileNavType }>
        <div className={styles.row}>
          {logo}
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
              {navButtons}
            </ul>
          </nav>
          <div id="navLoader" className={styles.loader} />
        </div>
      </header>
    );
    /* eslint-enable */
  }
}
