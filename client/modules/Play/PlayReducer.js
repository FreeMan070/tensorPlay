import { SHOW_PLAY_LIST } from './PlayActions';

// Initial State
const initialState = { data: [] };

const PlayReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PLAY_LIST :
      return {
        data: ['test'],
      };

    default:
      return state;
  }
};

// Export Reducer
export default PlayReducer;
