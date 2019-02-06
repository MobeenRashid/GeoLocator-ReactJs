import environment from '../common/environment'
import UrlBuilder from '../builder/UrlBuilder';
import axios from 'axios';

var LocationApi = (function () {
    function LocationApi(remoteOrigin = environment.remoteOrigin, basePathName = "api/location") {
        this.remoteOrigin = remoteOrigin;
        this.basePathName = basePathName;
        this.urlBuilder = new UrlBuilder(this.remoteOrigin, [this.basePathName])
    }

    LocationApi.prototype.GetAll = function (onOk, onError, onAlways) {
        return axios.get(this.urlBuilder.Build(['list'])).then(onOk).catch(onError).then(onAlways);
    }

    LocationApi.prototype.AddNew = function (location, onOk, onError, onAlways) {
        return axios.post(this.urlBuilder.Build(['create']), location).then(onOk).catch(onError).then(onAlways);
    }

    LocationApi.prototype.Update = function (location, onOk, onError, onAlways) {
        return axios.put(this.urlBuilder.Build(['update']), location).then(onOk).catch(onError).then(onAlways);
    }

    LocationApi.prototype.Delete = function (locationId, onOk, onError, onAlways) {
        return axios.delete(this.urlBuilder.Build(['delete', locationId])).then(onOk).catch(onError).then(onAlways);
    }

    return LocationApi;
}());

export default LocationApi;