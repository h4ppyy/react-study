import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './components/store';

const { store, persistor } = configureStore();
// persistor.purge();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>, 
  document.getElementById('root')
);