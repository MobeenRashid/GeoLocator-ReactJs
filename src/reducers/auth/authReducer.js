import { authReducerMap } from './authReducerMap';
import initialState from '../../store/initialState';

export function authReducer(state = initialState.googleMapKey, action) {
    let reducerAction = authReducerMap.get(action.type);
    if (!!(reducerAction) && typeof (reducerAction) === 'function') {
        return reducerAction(state, action);
    } else {
        return state;
    }
}
