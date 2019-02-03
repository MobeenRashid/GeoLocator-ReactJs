import * as actionTypes from '../constants/actionTypes';

function initLocations(locations) {
    return {
        type: actionTypes.INIT_LOCATIONS,
        locations
    }
}

function addOrUpdateLocation(location) {
    return {
        type: actionTypes.ADD_UPDATE_LOCATION,
        location
    }
}

function deleteLocation(id) {
    return {
        type: actionTypes.DELETE_LOCATION,
        id
    }
}


export { initLocations, addOrUpdateLocation, deleteLocation };