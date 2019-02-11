import * as actionTypes from '../constants/actionTypes';
import AuthApi from '../api/AuthApi';
import { message } from 'antd';

const authApi = new AuthApi();

function setGoogleMapKey(key) {
    return {
        type: actionTypes.SET_GOOGLE_MAP_KEY,
        key
    }
}


function getGoogleMapKey() {
    return (disaptch, getState) => {
        if (getState().getGoogleMapKey) {
            return Promise.resolve();
        }
        return authApi.GetGoogleMapKey(resp => {
            disaptch(setGoogleMapKey(resp.data));
        }, () => {
            message.error('Google maps is not available');
        });
    }
}


export {
    getGoogleMapKey,
    setGoogleMapKey
}