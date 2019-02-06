import * as actionTypes from '../constants/actionTypes';
import LocationApi from '../api/LocationApi';
import { message } from 'antd';
import { arrayToMap } from '../utils/arrayUtils';

function fetchLocationsSuccess(locations) {
    return {
        type: actionTypes.FETCH_LOCATIONS_SUCCESS,
        locations
    }
}

function requestingLocationsStart() {
    return {
        type: actionTypes.REQUESTING_LOCATIONS_START
    }
}

function requestingLocationsComplete() {
    return {
        type: actionTypes.REQUESTING_LOCATIONS_COMPLETE
    }
}

function fetchLocationsFailure() {
    return {
        type: actionTypes.FETCH_LOCATIONS_FAILURE
    }
}


function addOrUpdateLocation(location) {
    return {
        type: actionTypes.FETCH_LOCATIONS_SUCCESS,
        location
    }
}

function removeLocation(id) {
    return {
        type: actionTypes.REMOVE_LOCATION,
        id
    }
}

function deleteLocation(id) {
    return (dispatch) => {
        const hide = message.loading('Deleting location...');
        new LocationApi().Delete(id, response => {
            if (response.data && response.data.id) {
                return dispatch(removeLocation(response.data.id));
            }
        }, () => {
            message.error("Failed to delete location");
        }, () => {
            hide();
            message.success('Location is deleted');
        });
    }
}

function fetchLocations() {
    return dispatch => {
        dispatch(requestingLocationsStart());
        new LocationApi().GetAll(response => {
            if (response.data) {
                return dispatch(fetchLocationsSuccess(arrayToMap(response.data, loct => loct.id)));
            }
        }, (err) => {
            message.error('An erro occured while fetching locations');
            return dispatch(fetchLocationsFailure(err));
        }, () => {
            dispatch(requestingLocationsComplete())
        });
    }
}

function shouldFetchLocations(state) {
    if (state.locations && state.locations.size === 0) {
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
    deleteLocation,
    removeLocation,
    requestingLocationsStart as requestingLocations,
    fetchLocationsIfRequired,
    fetchLocationsFailure
};