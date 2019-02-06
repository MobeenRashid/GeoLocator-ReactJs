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
        let locationsCloned = Object.assign([], locations, [action.location]);

        let loctIndex = locationsCloned.findIndex(loct => loct.id === action.location.id);
        if (loctIndex > -1) {
            locationsCloned[loctIndex] = action.location;
        } else {
            locationsCloned.push(action.location);
        }
        return locationsCloned;
    }

    function removeLocation(locations, action) {
        let locationsCloned = Object.assign([], locations);
        debugger;
        let loctIndex = locationsCloned.findIndex(loct => loct.id === action.location.id);
        if (loctIndex > -1) {
            locationsCloned.splice(loctIndex, 1);
        }
        return locationsCloned;
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