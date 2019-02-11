import UrlBuilder from '../builder/UrlBuilder';
import axios from 'axios';

var AuthApi = (function () {
    const env = process.env;
    function AuthApi(remoteOrigin = env.REACT_APP_REMOTE_ORIGIN, basePathName = "api/auth") {
        this.remoteOrigin = remoteOrigin;
        this.basePathName = basePathName;
        this.urlBuilder = new UrlBuilder(this.remoteOrigin, [this.basePathName])
    }

    AuthApi.prototype.GetGoogleMapKey = function (onOk, onError, onAlways) {
        return axios.get(this.urlBuilder.Build(['googlemapkey'])).then(onOk).catch(onError).then(onAlways);
    }

    return AuthApi;
}());

export default AuthApi;