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

/* Selectors */

// Get all Plays
export const getPlays = state => state.plays.data;

// Get play by cuid
export const getPlay = (state, cuid) => state.plays.data.filter(post => play.cuid === cuid)[0];

// Export Reducer
export default PlayReducer;
