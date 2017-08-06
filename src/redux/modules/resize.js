const RESIZE = 'quartile/WINDOW_RESIZE';

const initialState = {
  windowWidth: window.innerWidth,
  windowHeight: window.innerHeight,
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // eslint-disable-next-line no-case-declarations
    case RESIZE:
      return {
        ...state,
        windowWidth: action.width,
        windowHeight: action.height,
        isLandscape: action.isLandscape
      };
    default:
      return state;
  }
}

export const mainImageResizeAction = () => ({
  type: RESIZE,
  width: window.innerWidth,
  height: window.innerHeight,
  isLandscape: false
});

