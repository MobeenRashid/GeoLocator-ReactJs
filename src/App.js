import React, { Component } from 'react';
import './App.css';
import appRoutes from './routing/app.routes';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import initialState from './store/initialState';

const store = configureStore(initialState);
class App extends Component {
  componentDidMount() {
    store.subscribe(() => { console.log(store.getState()); });
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            {appRoutes}
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
