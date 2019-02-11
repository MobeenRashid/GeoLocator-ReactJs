
var UrlBuilder = (function () {
    const env = process.env;
    function UrlBuilder(origin = env.REACT_APP_REMOTE_ORIGIN, pathSegments = [], queryParams = []) {
        this.UrlOptions = {
            Origin: origin,
            PathSegments: pathSegments,
            QueryStringParams: queryParams
        }
    }

    UrlBuilder.prototype.AddOrigin = function (origin) {
        this.UrlOptions.Origin = "" + origin;
        return this;
    }

    UrlBuilder.prototype.AddPathSegment = function (pathSegment) {
        this.UrlOptions.PathSegments.push("" + pathSegment);
        return this;
    }

    UrlBuilder.prototype.AddQueryStringParam = function (param) {
        this.UrlOptions.QueryStringParams.push("" + param);
        return this;
    }

    UrlBuilder.prototype.Build = function (specialPathSegments = [], specialQueryParams = []) {
        var url = this.UrlOptions.Origin;

        //assemble path segments
        var pathSegments = this.UrlOptions.PathSegments;
        pathSegments = pathSegments.concat(specialPathSegments)
        if (pathSegments.length > 0) {
            url = url + '/' + pathSegments.join('/');
        }

        //assemble query params
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