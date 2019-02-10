import React from 'react';
import './App.css';
import appRoutes from './routing/app.routes';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import initialState from './store/initialState';

const store = configureStore(initialState);
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        {appRoutes}
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
