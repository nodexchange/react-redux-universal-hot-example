import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { renderIntoDocument } from 'react-addons-test-utils';
// eslint-disable-next-line import/no-extraneous-dependencies
import { expect } from 'chai';
// eslint-disable-next-line import/extensions
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
// eslint-disable-next-line import/extensions
import createStore from 'redux/create';

// eslint-disable-next-line import/extensions, import/no-extraneous-dependencies
import ApiClient from 'helpers/ApiClient';
// eslint-disable-next-line import/extensions, import/no-extraneous-dependencies
import { FooterBar } from 'components';

const client = new ApiClient();

describe('FooterBar', () => {
  const mockStore = {
    info: {
      load: () => {},
      loaded: true,
      loading: false,
      data: {
        message: 'This came from the api server',
        time: Date.now()
      }
    }
  };
  const store = createStore(browserHistory, client, mockStore);
  const renderer = renderIntoDocument(
    <Provider store={store} key="provider">
      <FooterBar />
    </Provider>
  );
  // eslint-disable-next-line react/no-find-dom-node
  const dom = ReactDOM.findDOMNode(renderer);

  it('should render correctly', () => expect(renderer).to.be.ok);

  // it('should render with correct value', () => {
  //   const text = dom.getElementsByTagName('strong')[0].textContent;
  //   expect(text).to.equal(mockStore.info.data.message);
  // });

  // it('should render with a reload button', () => {
  //   const text = dom.getElementsByTagName('button')[0].textContent;
  //   expect(text).to.be.a('string');
  // });

  it('should render the correct className', () => {
    // eslint-disable-next-line global-require, import/no-extraneous-dependencies
    const styles = require('components/FooterBar/FooterBar.scss');

    expect(styles.footerbar).to.be.a('string');
    expect(dom.className).to.include(styles.footerbar);
  });
});
