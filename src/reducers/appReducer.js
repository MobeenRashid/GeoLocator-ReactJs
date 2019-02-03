import { combineReducers } from "redux";
import locations from './location/locationReducer'

const appReducer = combineReducers({ locations, });

export default appReducer;