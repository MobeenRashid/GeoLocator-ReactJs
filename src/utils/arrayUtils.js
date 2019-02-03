import { Map } from 'immutable';

function arrayToMap(array, keyProvider) {
    return Map(array.map(item => {
        let key = item;
        if (keyProvider && typeof (keyProvider) === "function") {
            key = keyProvider(item);
        }
        return [key, item];
    }));
}

export { arrayToMap };