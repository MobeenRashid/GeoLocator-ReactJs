var locationReducerPlans = (function () {

    function fetchLocationsSuccess(locations, action) {
        return action.locations;
    }

    function requestingLocationsStart() {
        return true;
    }

    function requestingLocationsComplete() {
        return false;
    }

    function addOrUpdateLocation(locations, action) {
        let locationMuted = locations.set(action.location.id, action.location);
        return locationMuted;
    }

    function removeLocation(locations, action) {
        let locationMuted = locations.delete(action.id);
        return locationMuted;
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