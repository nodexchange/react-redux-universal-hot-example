import Copy from '../../helpers/Copy';

const LOAD_COPY = 'quartile/LOAD_COPY';

const initialState = {
  localeCopy: [{ default: 'action default' }],
};

export default function copy(state = initialState, action = {}) {
  switch (action.type) {
    // eslint-disable-next-line no-case-declarations
    case LOAD_COPY:
      return {
        ...state,
        localeCopy: action.localeCopy
      };
    default:
      return state;
  }
}

// eslint-disable-next-line arrow-parens
export const loadCopy = (section) => ({
  type: LOAD_COPY,
  localeCopy: Copy.retrieveCopy(section)
});
