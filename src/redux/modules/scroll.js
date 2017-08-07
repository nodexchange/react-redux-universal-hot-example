import Scroll from '../../helpers/Scroll';

const SCROLL = 'quartile/WINDOW_SCROLL';

const initialState = {
  offsetRatio: 1
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // eslint-disable-next-line no-case-declarations
    case SCROLL:
      return {
        ...state,
        offsetRatio: action.offsetRatio
      };
    default:
      return state;
  }
}

export const mainWindowScrollAction = () => ({
  type: SCROLL,
  offsetRatio: Scroll.scrollViewportToOffsetRatio()
});
