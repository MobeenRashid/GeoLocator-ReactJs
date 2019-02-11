var authReducerPlans = (function () {

    function setGoogleMapKey(key, action) {
        return action.key;
    }

    return {
        setGoogleMapKey
    }
}());

export default authReducerPlans;