import LocationApi from "./LocationApi";
import { __mockLocationList } from "../../__mocks__/__mockState";

const locationApi = new LocationApi('http://localhost:5000');
describe('Location API', () => {

    test('Should add location correctly', async () => {
        expect.assertions(1);

        //test
        let location = await locationApi.AddNew(__mockLocationList[0]);

        //asserts
        expect(location.data).toEqual(__mockLocationList[0]);

        //cleanup
        await locationApi.Delete(__mockLocationList[0].id);
    });

    test('Should update location correctly', async () => {
        expect.assertions(1);

        //setup
        await locationApi.AddNew(__mockLocationList[0]);

        //test data
        var __potsDam = {
            id: '3',
            address: 'Potsdam',
            lat: '786',
            lng: '787'
        }
        var locationData = {
            prevLocation: __mockLocationList[0],
            newLocation: __potsDam
        }

        //test
        let updatedLocation = await locationApi.Update(locationData);

        //asserts
        expect(updatedLocation.data).toEqual(__potsDam);

        //cleanup
        await locationApi.Delete(__potsDam.id);
    });

    test('Should delete location correctly', async () => {
        expect.assertions(1);

        //setup
        await locationApi.AddNew(__mockLocationList[0]);

        //test
        let deletedLocation = await locationApi.Delete(__mockLocationList[0].id);

        //asserts
        expect(deletedLocation.data).toEqual(__mockLocationList[0]);
    });
});