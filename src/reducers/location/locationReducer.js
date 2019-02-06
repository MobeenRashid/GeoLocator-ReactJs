import { locationReducerMap, requestingLocationReducerMap } from './locationReducerMap';
import initialState from '../../store/initialState';

export function locationReducer(state = initialState.locations, action) {
    let reducerAction = locationReducerMap.get(action.type);
    if (!!(reducerAction) && typeof (reducerAction) === 'function') {
        return reducerAction(state, action);
    } else {
        return state;
    }
}

export function requestingLocationReducer(state = initialState.requestingLocations, action) {
    let reducerAction = requestingLocationReducerMap.get(action.type);
    if (!!(reducerAction) && typeof (reducerAction) === 'function') {
        return reducerAction(state, action);
    } else {
        return state;
    }
}