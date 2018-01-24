// import { createStore } from 'redux'
// import app from './src/reducers';

// export default function configureStore() {
//   let store = createStore(app)
//   return store
// }

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers';

export default function configureStore() {
  let store = createStore(reducers, applyMiddleware(thunk));
  return store;
}
