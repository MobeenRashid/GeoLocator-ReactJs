import LocationApi from "./LocationApi";
import { __mockLocationList } from "../../__mocks__/mockConstants";

const locationApi = new LocationApi();
describe('Location API', () => {

    test('Should add location correctly', async () => {
        expect.assertions(1);

        let location1 = await locationApi.AddNew(__mockLocationList[0]);
        expect(location1.data).toEqual(__mockLocationList[0]);
        await locationApi.Delete(__mockLocationList[0].id);
    });

    test('Should update location correctly', async () => {
        expect.assertions(1);

        await locationApi.AddNew(__mockLocationList[0]);
        let location = Object.assign({}, __mockLocationList[0]);
        location.address = 'Postdam';
        location.lat = '655';
        location.lng = '756';

        let updatedLocation = await locationApi.Update(location);
        expect(updatedLocation.data).toEqual(location);
        await locationApi.Delete(__mockLocationList[0].id);
    });

    test('Should delete location correctly', async () => {
        expect.assertions(1);

        await locationApi.AddNew(__mockLocationList[0]);

        let deletedLocation = await locationApi.Delete(__mockLocationList[0].id);
        expect(deletedLocation.data).toEqual(__mockLocationList[0]);
    });
});