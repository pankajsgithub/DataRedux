// import { AppRegistry } from 'react-native';
// import App from './App';
// AppRegistry.registerComponent('ListEx', () => App);

import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import App from './App';


//const store = configureStore();

const RApp = () => (
  <Provider store={createStore(reducers,applyMiddleware(thunk))}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('ListEx', () => RApp);
