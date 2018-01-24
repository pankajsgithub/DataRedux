//import * as actionTypes from './actionTypes';
// import FETCH_BOOKS_SUCCESS from './actionTypes';
// import Axios from 'axios';

// const apiUrl = 'http://57c64baac1fc8711008f2a82.mockapi.io/book';

// export const fetchBooksSuccess = books => {
//   return {
//     type: FETCH_BOOKS_SUCCESS,
//     books
//   };
// };

// export const fetchBooks = () => {
//   return dispatch => {
//     return Axios.get(apiUrl).then(response => {
//       dispatch(fetchBooksSuccess(response.data));
//     });
//   };
// };

import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
} from './actionTypes';
import getPeople from '../../api';

export function getData() {
  return {
    type: FETCHING_DATA,
  };
}

export function getDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data,
  };
}

export function getDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE,
  };
}

export function fetchData() {
  return dispatch => {
    dispatch(getData());
    getPeople()
      .then(data => {
        dispatch(getDataSuccess(data));
      })
      .catch(err => console.log('err:', err));
  };
}
