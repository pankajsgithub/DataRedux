// import { FETCH_BOOKS_SUCCESS } from '../actions/actionTypes';

// export const booksReducer = (state=[], action) => {
//     switch (action.type) {
//       case FETCH_BOOKS_SUCCESS:
//             return action.books;
//       default:
//             return state;
//     }
//   };

import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
} from '../actions/actionTypes';
const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false,
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: true,
      };
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
}
