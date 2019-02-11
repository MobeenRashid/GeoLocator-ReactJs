import { combineReducers } from "redux";
import { locationReducer, requestingLocationReducer } from './location/locationReducer'
import { authReducer } from './auth/authReducer'
const appReducer = combineReducers({
    locations: locationReducer,
    requestingLocations: requestingLocationReducer,
    googleMapKey: authReducer
});

export default appReducer;