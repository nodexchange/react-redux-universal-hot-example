/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import throttle from '../../helpers/Throttle';

// eslint-disable-next-line react/prefer-stateless-function
export default class ArrowNav extends Component {
  constructor(props) {
    super(props);
    // this.scrollPageHandler = debounce(this.scrollPageHandler, 100);
    // this.mouseScrollHandler = debounce(this.mouseScrollHandler, 100);
    this.mScrollHandler = throttle(this.mScrollHandler, 150);
  }

  componentDidMount() {
    window.addEventListener('scroll', (e) => { this.mScrollHandler(e); });
  }

  mScrollHandler = (e) => {
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
  }
  render() {
    // eslint-disable-next-line global-require
    const styles = require('./ArrowNav.scss');

    return (
      <div className={styles.arrowNav}>
        <button />
        <button />
        <div className="counter">
          <span className="counter-text">2</span><span class="ng-binding"> of </span><span class="max ng-binding">9</span>
        </div>
      </div>
    );
  }
}
