import axios from "axios";

const API_END_POINT = process.env.REACT_APP_STARSHIPS_API;

export const api = {
  fetchData(action) {
    return axios
      .get(`${API_END_POINT}?page=${action.page}`)
      .then(response => ({ starships: response.data }))
      .catch(error => ({ error }));
  }
};
