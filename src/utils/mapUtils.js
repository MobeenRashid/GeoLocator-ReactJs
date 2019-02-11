const appSettings = require('../app.settings');

function getGoogleMapUrl(key) {
    let googleMapUrl = appSettings.google_map_url;
    if (key) {
        googleMapUrl = googleMapUrl.replace('{{key}}', key);
    }
    return googleMapUrl;
}

export { getGoogleMapUrl };