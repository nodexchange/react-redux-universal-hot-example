/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import debounce from '../../helpers/Debounce';
import throttle from '../../helpers/Throttle';
import scrollToY from '../../helpers/Scroll';

// eslint-disable-next-line import/extensions, import/no-extraneous-dependencies
// import config from '../../config';

// eslint-disable-next-line react/prefer-stateless-function
export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.scrollPageHandler = debounce(this.scrollPageHandler, 100);
    this.mouseScrollHandler = debounce(this.mouseScrollHandler, 100);
    this.mScrollHandler = throttle(this.mScrollHandler, 50);
  }

  /*
// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

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
    /*
      window.addEventListener('scroll', (e) => { this.scrollPageHandler(e); });
      window.addEventListener('DOMMouseScroll', (e) => { this.mouseScrollHandler(e); });
      window.addEventListener('mousewheel', (e) => { this.mScrollHandler(e); });
      console.log('HERE???' + window);
    */
    window.addEventListener('mousewheel', (e) => { this.mouseScrollHandler(e); });
    if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', this.wheel, false);
    }
    window.onmousewheel = document.onmousewheel = this.wheel;
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
    scrollToY(500, 13500, 'easeInOutQuint');
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
    console.log(e.wheelDelta);
    // window.scrollTo(0, e.wheelDelta);
  }
  render() {
    // eslint-disable-next-line global-require
    const styles = require('./NavBar.scss');
    // require the logo image both from client and server
    // eslint-disable-next-line global-require
    /*
    <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/" activeStyle={{ color: '#33e0ff' }}>
                <div className={styles.brand} />
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

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
    */

    return (
      <header className={styles.mainHeader + ' ' + styles.sticky}>
        <div className={styles.row}>
          <IndexLink to="/" activeStyle={{ color: '#33e0ff' }}>
            <div className={styles.brand} />
          </IndexLink>
          <div className={styles.mobileToggle}>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
          <nav className={styles.navBar}>
            <ul>
              <li><a href=".sec01">Section 01</a></li>
              <li><a href=".sec02">Section 02</a></li>
              <li><a href=".sec03">Section 03</a></li>
              <li><a href=".sec04">Section 04</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
