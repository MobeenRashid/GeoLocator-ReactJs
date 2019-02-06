import * as actionTypes from '../../constants/actionTypes'
import locationReducerPlans from './locationReducerPlans';

const locationReducerMap = new Map(
    [
        [actionTypes.ADD_OR_UPDATE_LOCATION, locationReducerPlans.addOrUpdateLocation],
        [actionTypes.REMOVE_LOCATION, locationReducerPlans.removeLocation],
        [actionTypes.FETCH_LOCATIONS_SUCCESS, locationReducerPlans.fetchLocationsSuccess]
    ]
);

const requestingLocationReducerMap = new Map(
    [
        [actionTypes.REQUESTING_LOCATIONS_START, locationReducerPlans.requestingLocationsStart],
        [actionTypes.REQUESTING_LOCATIONS_COMPLETE, locationReducerPlans.requestingLocationsComplete]
    ]
);
export { locationReducerMap, requestingLocationReducerMap };