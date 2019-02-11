import UrlBuilder from "./UrlBuilder";

describe('UrlBuilder', () => {
    test('Should build paths segments correctly', () => {
        let urlBuilder = new UrlBuilder(process.env.REACT_APP_REMOTE_ORIGIN)
        urlBuilder.AddPathSegment('user')
            .AddPathSegment('get')
            .AddPathSegment(1);
        expect(urlBuilder.Build()).toBe(`${process.env.REACT_APP_REMOTE_ORIGIN}/user/get/1`);
    });

    test('Should build query params correctly', () => {
        let urlBuilder = new UrlBuilder(process.env.REACT_APP_REMOTE_ORIGIN)
        urlBuilder.AddPathSegment('user')
            .AddQueryStringParam('id=1')
            .AddQueryStringParam('name=Mobeen')
            .AddPathSegment('get');
        expect(urlBuilder.Build()).toBe(`${process.env.REACT_APP_REMOTE_ORIGIN}/user/get?id=1&name=Mobeen`);
    });
});