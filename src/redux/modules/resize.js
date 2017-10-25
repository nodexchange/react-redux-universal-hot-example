const RESIZE = 'quartile/WINDOW_RESIZE';

const initialState = {
  windowWidth: 0,
  windowHeight: 0,
  isLandscape: false
};
export default function resize(state = initialState, action = {}) {
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

