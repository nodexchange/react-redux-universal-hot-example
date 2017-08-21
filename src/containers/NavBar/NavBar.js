/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import throttle from '../../helpers/Throttle';
// import debounce from '../../helpers/Debounce';
// import scrollToY from '../../helpers/Scroll';

// eslint-disable-next-line import/extensions, import/no-extraneous-dependencies
// import config from '../../config';

// eslint-disable-next-line react/prefer-stateless-function
export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { navbar: 'sticky' };
    // this.scrollPageHandler = debounce(this.scrollPageHandler, 100);
    // this.mouseScrollHandler = debounce(this.mouseScrollHandler, 100);

    this.mScrollHandler = throttle(this.mScrollHandler, 150);
  }

  /*

  // navigation scroll lijepo radi materem
  $('nav a').click(function(event) {
      var id = $(this).attr("href");
      var offset = 70;
      var target = $(id).offset().top - offset;
      $('html, body').animate({
          scrollTop: target
      }, 500);
      event.preventDefault();
  });
  */
  componentDidMount() {
    window.addEventListener('scroll', (e) => { this.mScrollHandler(e); });
    /*
      window.addEventListener('DOMMouseScroll', (e) => { this.mouseScrollHandler(e); });
      window.addEventListener('mousewheel', (e) => { this.mScrollHandler(e); });
      console.log('HERE???' + window);
    */
    // window.addEventListener('mousewheel', (e) => { this.mouseScrollHandler(e); });
    // if (window.addEventListener) {
    //   window.addEventListener('DOMMouseScroll', this.wheel, false);
    // }
    // window.onmousewheel = document.onmousewheel = this.wheel;
  }

  scrollPageHandler = (e) => {
    console.log('Math.random ' + Math.random() + ' e ' + e);
  }

  wheel = (event) => {
    let delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;
    this.handle(delta);
    if (event.preventDefault) event.preventDefault();
    // eslint-disable-next-line
    event.returnValue = false;
  }

  handle = () => {
    // let time = 1000;
    // const distance = 300;
    // const place = delta * distance;
    // const currentTop = window.pageYOffset;

    // window.scrollTo(0, currentTop - place);

    // scroll it!
    // $('html, body').stop().animate({
        // scrollTop: $(window).scrollTop() - (distance * delta)
    // }, time );
  }

  mouseScrollHandler = (e) => {
    // scrollToY(500, 13500, 'easeInOutQuint');
    console.log(e);
    /*
    if (!e) e = {};
    const direction = (e.detail < 0 || e.wheelDelta > 0) ? 1 : -1;
    console.log(direction + ' | deltaY : ');
    console.log(e);
    if (direction === -1) {
      window.scrollTo(0, 400);
    }
    */
    // Use the value as you will
  };
  mScrollHandler = (e) => {
    // console.log(e.detail);
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

    console.log(scrollPercentage + ' e ' + e);
    // window.scrollTo(0, e.wheelDelta);
  }
  navClickHandler = () => {
    if (this.state) {
      if (this.state.mobileNav === 'open-nav') {
        this.setState({ mobileNav: '' });
        return;
      }
      this.setState({ mobileNav: 'open-nav' });
    }
    /*
  $('.main_h li a').click(function() {
      if ($('.main_h').hasClass('open-nav')) {
          $('.navigation').removeClass('open-nav');
          $('.main_h').removeClass('open-nav');
      }
  });
  */
  }
  render() {
    // eslint-disable-next-line global-require
    const styles = require('./NavBar.scss');
    // require the logo image both from client and server
    // eslint-disable-next-line global-require
    /*
    <Navbar fixedTop>

          <Navbar.Collapse eventKey={0}>
            <Nav navbar className={styles.navBar}>
              {user && <LinkContainer to="/chat">
                <NavItem eventKey={1}>Chat</NavItem>
              </LinkContainer>}
              <LinkContainer to="/">
                <NavItem eventKey={0}>Home</NavItem>
              </LinkContainer>
              <LinkContainer to="/solutions">
                <NavItem eventKey={2}>Solutions</NavItem>
              </LinkContainer>
              <LinkContainer to="/products">
                <NavItem eventKey={2}>Products</NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavItem eventKey={2}>About</NavItem>
              </LinkContainer>
              <LinkContainer to="/blog">
                <NavItem eventKey={2}>Blog</NavItem>
              </LinkContainer>
              <LinkContainer to="/widgets">
                <NavItem eventKey={2}>Widgets</NavItem>
              </LinkContainer>
            </Nav>
            {user &&
            <p className={`${styles.loggedInMessage} navbar-text`}>Logged in as <strong>{user.name}</strong>.</p>}
            <Nav navbar pullRight>
              <LinkContainer to="/login" className={styles.btn + ' ' + styles.btnBlue}>
                <NavItem eventKey={1}>
                  Contact <i className="fa fa-sign-in" id={styles.envolopeIcon} />
                </NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About</Link></li>
    */
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
            onClick={this.navClickHandler}>
            <span>{}</span>
            <span>{}</span>
            <span>{}</span>
          </div>
          <nav className={styles.navBar}>
            <ul>
              <li><Link to="/" onClick={this.navClickHandler}>Solutions</Link></li>
              <li><Link to="/about" onClick={this.navClickHandler}>About</Link></li>
              <li><Link to="/contact" onClick={this.navClickHandler}>Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    );
    /* eslint-enable */
  }
}
