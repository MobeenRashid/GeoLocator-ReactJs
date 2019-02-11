import * as actionTypes from '../../constants/actionTypes'
import authReducerPlans from './authReducerPlans';

const authReducerMap = new Map(
    [
        [actionTypes.SET_GOOGLE_MAP_KEY, authReducerPlans.setGoogleMapKey]
    ]
);

export { authReducerMap };