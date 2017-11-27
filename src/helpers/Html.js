/* eslint-disable react/no-danger, global-require, no-underscore-dangle */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
export default class Html extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    assets: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    component: PropTypes.node,
    store: PropTypes.object // eslint-disable-line react/forbid-prop-types
  };

  render() {
    const { assets, component, store } = this.props;
    const content = component ? ReactDOM.renderToString(component) : '';
    const head = Helmet.rewind();

    const contentStyle = {
      height: '100%',
      minHeight: '100%'
    };

    return (
      <html lang="en-US">
        <head>
          {head.base.toComponent()}
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {head.script.toComponent()}
          <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />          
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* styles (will be present only in production with webpack extract text plugin) */}
          {Object.keys(assets.styles).map((style, key) =>
            <link
              href={assets.styles[style]}
              key={key} media="screen, projection"
              rel="stylesheet" type="text/css" charSet="UTF-8"
            />
          )}

          {/* (will be present only in development mode) */}
          {/* outputs a <style/> tag with all bootstrap styles + App.scss + it could be CurrentPage.scss. */}
          {/* can smoothen the initial style flash (flicker) on page load in development mode. */}
          {/* ideally one could also include here the style for the current page (Home.scss, About.scss, etc) */}
          {
            // eslint-disable-next-line max-len, react/no-danger, global-require, no-underscore-dangle
            Object.keys(assets.styles).length === 0 ? <style dangerouslySetInnerHTML={{ __html: require('../containers/App/App.scss')._style }} /> : null
          }          
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-105179082-1"></script>
          <script src="/ganalytics.js"></script>
          
        </head>
        <body>
          <div id="content" className="content" dangerouslySetInnerHTML={{ __html: content }} style={contentStyle} />
          <script
            dangerouslySetInnerHTML={{ __html: `window.__data=${serialize(store.getState())};` }}
            charSet="UTF-8"
          />
          <script src={assets.javascript.main} charSet="UTF-8" />
        </body>
      </html>
    );
  }
}
