import {
  FETCH_STARSHIP_REQUESTED,
  FETCH_STARSHIP_SUCCESS,
  FETCH_STARSHIP_FAILURE
} from "../actionType/starshipType";

export const starshipsRequest = page => ({
  type: FETCH_STARSHIP_REQUESTED,
  page
});

export const starshipsSuccess = starships => ({
  type: FETCH_STARSHIP_SUCCESS,
  starships
});

export const starshipsFail = error => ({
  type: FETCH_STARSHIP_FAILURE,
  error
});
