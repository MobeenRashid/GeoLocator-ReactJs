import environment from "../common/environment";

var UrlBuilder = (function () {
    function UrlBuilder(origin = environment.remoteOrigin, pathSegments = [], queryParams = []) {
        this.UrlOptions = {
            Origin: origin,
            PathSegments: pathSegments,
            QueryStringParams: queryParams
        }
    }

    UrlBuilder.prototype.AddOrigin = function (origin) {
        if (typeof (origin) !== "string" || typeof (origin) !== "number") {
            return;
        }
        this.UrlOptions.Origin = "" + origin;
    }

    UrlBuilder.prototype.AddPathSegment = function (pathSegment) {
        if (typeof (pathSegment) !== "string" || typeof (pathSegment) !== "number") {
            return;
        }
        this.UrlOptions.PathSegments.push("" + pathSegment);
    }

    UrlBuilder.prototype.AddQueryStringParam = function (param) {
        if (typeof (param) !== "string" || typeof (param) !== "number") {
            return;
        }
        this.UrlOptions.QueryStringParams.push("" + param);
    }

    UrlBuilder.prototype.Build = function (specialPathSegments = [], specialQueryParams = []) {
        var url = this.UrlOptions.Origin;

        var pathSegments = this.UrlOptions.PathSegments;
        pathSegments = pathSegments.concat(specialPathSegments)
        if (pathSegments.length > 0) {
            url = url + '/' + pathSegments.join('/');
        }
        var queryParams = this.UrlOptions.QueryStringParams;
        queryParams = queryParams.concat(specialQueryParams);
        if (queryParams.length > 0) {
            url = url + '?' + queryParams.join('&')
        }

        return url;
    }

    return UrlBuilder;
}());

export default UrlBuilder;