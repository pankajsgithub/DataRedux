// import {combineReducers} from 'redux';
// import {booksReducer} from './bookReducers';

// export default combineReducers({
//   books: booksReducer,
// });

import {combineReducers} from 'redux';
import appData from './bookReducers';

const rootReducer = combineReducers({
  appData,
});

export default rootReducer;
