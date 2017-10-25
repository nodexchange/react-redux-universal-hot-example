import Scroll from '../../helpers/Scroll';

const SCROLL = 'quartile/WINDOW_SCROLL';
const CURRENT_PAGE = 'quartile/CURRENT_PAGE';
const MAX_PAGES = 'quartile/MAX_PAGES';


const initialState = {
  offsetRatio: 1,
  maxPages: 7,
  scrollToSection: 0
};

export default function scroll(state = initialState, action = {}) {
  switch (action.type) {
    // eslint-disable-next-line no-case-declarations
    case SCROLL:
      return {
        ...state,
        offsetRatio: action.offsetRatio
      };
    case MAX_PAGES:
      return {
        ...state,
        maxPages: action.maxPages
      };
    case CURRENT_PAGE:
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

// eslint-disable-next-line arrow-parens
export const updateMaxPages = (value) => ({
  type: MAX_PAGES,
  maxPages: value
});

// eslint-disable-next-line arrow-parens
export const updateCurrentPage = (value) => ({
  type: CURRENT_PAGE,
  offsetRatio: value
});
