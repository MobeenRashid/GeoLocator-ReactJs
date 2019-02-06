import { combineReducers } from "redux";
import { locationReducer, requestingLocationReducer } from './location/locationReducer'

const appReducer = combineReducers({
    locations: locationReducer,
    requestingLocations: requestingLocationReducer
});

export default appReducer;