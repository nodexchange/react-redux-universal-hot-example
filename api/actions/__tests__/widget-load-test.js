// eslint-disable-next-line import/no-extraneous-dependencies
import { expect } from 'chai';
// eslint-disable-next-line import/no-extraneous-dependencies
import sinon from 'sinon';

import load from '../widget/load';

describe('widget load', () => {
  afterEach(() => {
    if ('restore' in Math.random) {
      Math.random.restore(); // reset the Math.random fixture
    }
  });

  describe('successful', () => {
    beforeEach(() => {
      sinon.stub(Math, 'random').returns(0.4);
    });

    it('uses the widgets from the session', () => { // eslint-disable-line arrow-body-style
      return load({ session: { widgets: ['a', 'b', 'c'] } }).then((widgets) => {
        expect(widgets.length).to.equal(3);
      });
    });

    it('initializes the widgets ', () => { // eslint-disable-line arrow-body-style
      return load({ session: {} }).then((widgets) => {
        expect(widgets.length).to.equal(4);
        expect(widgets[0].color).to.equal('Red');
      });
    });
  });

  describe('unsuccessful', () => {
    beforeEach(() => {
      sinon.stub(Math, 'random').returns(0.2);
    });

    it('rejects the call', () => { // eslint-disable-line arrow-body-style
      return load({ session: {} })
        .then(
          () => {
          },
          (err) => {
            expect(err).to.equal('Widget load fails 33% of the time. You were unlucky.');
          }
        );
    });
  });
});
