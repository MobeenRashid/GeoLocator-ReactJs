var locationReducerPlans = (function () {

    function fetchLocationsSuccess(locations, action) {
        return Object.assign([], locations, action.locations);
    }

    function requestingLocationsStart(requestingLocations, action) {
        return action.value;
    }

    function requestingLocationsComplete(requestingLocations, action) {
        return action.value;
    }

    function addOrUpdateLocation(locations, action) {
        let locationsCopy = Object.assign([], locations);

        let loctIndex = locationsCopy.findIndex(loct => loct.id === action.location.id);
        if (loctIndex > -1) {
            locationsCopy[loctIndex] = action.location;
        } else {
            locationsCopy.push(action.location);
        }
        return locationsCopy;
    }

    function removeLocation(locations, action) {
        let locationsCopy = Object.assign([], locations);
       
        let loctIndex = locationsCopy.findIndex(loct => loct.id === action.location.id);
        if (loctIndex > -1) {
            locationsCopy.splice(loctIndex, 1);
        }
        return locationsCopy;
    }

    return {
        fetchLocationsSuccess,
        requestingLocationsStart,
        requestingLocationsComplete,
        addOrUpdateLocation,
        removeLocation
    }
}());

export default locationReducerPlans;