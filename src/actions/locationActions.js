import * as actionTypes from '../constants/actionTypes';
import LocationApi from '../api/LocationApi';
import { message } from 'antd';

function fetchLocationsSuccess(locations) {
    return {
        type: actionTypes.FETCH_LOCATIONS_SUCCESS,
        locations
    }
}

function requestingLocationsStart() {
    return {
        type: actionTypes.REQUESTING_LOCATIONS_START,
        value: true
    }
}

function requestingLocationsComplete() {
    return {
        type: actionTypes.REQUESTING_LOCATIONS_COMPLETE,
        value: false
    }
}

function fetchLocationsFailure() {
    return {
        type: actionTypes.FETCH_LOCATIONS_FAILURE
    }
}


function addOrUpdateLocation(location) {
    return {
        type: actionTypes.ADD_OR_UPDATE_LOCATION,
        location
    }
}

function addNewLocation(location) {
    return dispatch => {
        let hide = message.loading('Adding new location...');
        new LocationApi().AddNew(location, respone => {
            hide();
            if (respone.data && respone.data.id) {
                dispatch(addOrUpdateLocation(respone.data));
                message.success('Location added successfully')
            }
        }, () => {
            hide();
            message.error("Failed to add new location");
        });
    }
}

function updateLocation(prevLocation, newLocation) {
    return dispatch => {
        const locationApi = new LocationApi();
        const locationData = {
            prevLocation, newLocation
        }

        let hide = message.loading('Updating location...');
        locationApi.Update(locationData, respone => {
            hide();
            if (respone.data && respone.data.id) {
                dispatch(addOrUpdateLocation(respone.data));
                dispatch(removeLocation(prevLocation));
                message.success('Location updated successfully')
            }
        }, () => {
            hide();
            message.error("Failed to update location");
        });
    }
}

function removeLocation(location) {
    return {
        type: actionTypes.REMOVE_LOCATION,
        location
    }
}

function deleteLocation(id) {
    return (dispatch) => {
        const hide = message.loading('Deleting location...');
        new LocationApi().Delete(id, response => {
            hide();
            if (response.data && response.data.id) {
                dispatch(removeLocation(response.data));
                message.success('Location is deleted');
            }
        }, () => {
            hide();
            message.error("Failed to delete location");
        });
    }
}

function fetchLocations() {
    return dispatch => {
        dispatch(requestingLocationsStart());
        const locationApi = new LocationApi();
        return locationApi.GetAll(response => {
            if (response.data && response.data.length) {
                message.success('Locations are loaded');
                return dispatch(fetchLocationsSuccess(response.data));
            }
            message.info('No locations are available');
        }, (err) => {
            message.error('An erro occured while fetching locations');
            return dispatch(fetchLocationsFailure(err));
        }, () => {
            dispatch(requestingLocationsComplete())
        });
    }
}

function shouldFetchLocations(state) {
    if (state.locations && state.locations.length === 0) {
        return true;
    } else {
        return false;
    }
}

function fetchLocationsIfRequired() {
    return (dispatch, getState) => {
        if (shouldFetchLocations(getState())) {
            return dispatch(fetchLocations());
        } else {
            return Promise.resolve();
        }
    }
}

export {
    fetchLocationsSuccess,
    addOrUpdateLocation,
    addNewLocation,
    updateLocation,
    deleteLocation,
    removeLocation,
    requestingLocationsStart as requestingLocations,
    fetchLocationsIfRequired,
    fetchLocationsFailure
};