import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './App.css';
import reducer from './reducers';
import Routes from './routes';

const store = createStore(reducer, {}, applyMiddleware(thunk));
const App = () => (
  <Provider store={store}>
    <div className="App">
      <Routes />
    </div>
  </Provider>
);

export default App;
