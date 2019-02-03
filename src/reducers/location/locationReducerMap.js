import * as actionTypes from '../../constants/actionTypes'
import locationReducerPlans from './locationReducerPlans';

const locationReducerMap = new Map(
    [
        [actionTypes.ADD_UPDATE_LOCATION, locationReducerPlans.addOrUpdateLocation],
        [actionTypes.DELETE_LOCATION, locationReducerPlans.deleteLocation],
        [actionTypes.INIT_LOCATIONS, locationReducerPlans.initLocations]
    ]
);

export default locationReducerMap;