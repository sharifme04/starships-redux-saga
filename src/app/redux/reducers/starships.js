import {
  FETCH_STARSHIP_REQUESTED,
  FETCH_STARSHIP_SUCCESS,
  FETCH_STARSHIP_FAILURE
} from "../actionType/starshipType";

const initialState = {
  starships: null,
  error: null
};

export default function starships(state = initialState, action) {
  switch (action.type) {
    case FETCH_STARSHIP_REQUESTED:
    return {
        isLoading: true,
      }
    case FETCH_STARSHIP_SUCCESS:
    return {
      ...state,
      starships: action.starships,
      isLoading: false,
    };
    case FETCH_STARSHIP_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
