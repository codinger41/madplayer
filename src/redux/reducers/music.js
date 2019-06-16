import { ALL_TRACKS } from '../actions/actionTypes';

const initialState = {
  tracks: [],
  nowPlaying: {}
};


export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ALL_TRACKS:
      return { ...state, tracks: action.tracks };
    default: return state;
  }
};
