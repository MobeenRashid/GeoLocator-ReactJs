import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import appReducer from "../reducers/appReducer";

const configureStore = (initialState) => createStore(appReducer, initialState, applyMiddleware(thunk));
export default configureStore;