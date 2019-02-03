import locationReducerMap from './locationReducerMap';
import initialState from '../../store/initialState';

export default function locationReducer(state = initialState.locations, action) {
    let reducerAction = locationReducerMap.get(action.type);
    if (!!(reducerAction) && typeof (reducerAction) === 'function') {
        return reducerAction(state, action);
    } else {
        return state;
    }
}