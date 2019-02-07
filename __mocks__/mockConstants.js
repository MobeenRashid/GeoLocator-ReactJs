import { arrayToMap } from "../src/utils/arrayUtils";

const __mockLocationList = [
    {
        id: '1',
        address: 'Berlin',
        lng: "123",
        lat: "456"
    },
    {
        id: '2',
        address: 'Munich',
        lng: "124",
        lat: "457"
    }
];


const __mockState = {
    locations: __mockLocationList,
    requestingLocations: false
}

export { __mockState, __mockLocationList };