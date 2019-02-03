import { createStore } from "redux";
import appReducer from "../reducers/appReducer";

const configureStore = (initialState) => createStore(appReducer, initialState);
export default configureStore;