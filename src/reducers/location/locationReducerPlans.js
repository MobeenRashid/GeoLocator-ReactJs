var locationReducerPlans = (function () {

    function initLocations(locations, action) {
        return action.locations;
    }

    function addOrUpdateLocation(locations, action) {
        let locationMuted = locations.set(action.location.id, action.location);
        return locationMuted;
    }

    function deleteLocation(locations, action) {
        let locationMuted = locations.delete(action.id);
        return locationMuted;
    }

    return {
        initLocations,
        addOrUpdateLocation,
        deleteLocation
    }
}());

export default locationReducerPlans;