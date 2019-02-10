import axios from 'axios';
import { __mockState, __mockLocationList } from '../../__mocks__/__mockState';
import * as actions from './locationActions';
import configureStore from '../store/configureStore';

jest.mock('axios');

describe('Location actions', () => {
    test('Should add location correctly', async () => {
        let store = configureStore(__mockState);

        var __potsDam = {
            id: '3',
            address: 'Potsdam',
            lat: '786',
            lng: '787'
        }

        axios.post.mockImplementation(() => {
            return Promise.resolve({ data: __potsDam });
        });

        await store.dispatch(actions.addNewLocation(__potsDam));
        const location = store.getState().locations.find(loct => loct && loct.id === __potsDam.id);
        expect(location).toEqual(__potsDam);
    });

    test('Should update location correctly', async () => {
        let store = configureStore(__mockState);

        var __potsDam = {
            id: __mockLocationList[0].id,
            address: 'Potsdam',
            lat: '786',
            lng: '787'
        }
    
        axios.put.mockImplementation(() => {
            return Promise.resolve({ data: __potsDam });
        });

        await store.dispatch(actions.updateLocation(__potsDam));
        const location = store.getState().locations.find(loct => loct && loct.id === __potsDam.id);
        expect(location).toEqual(__potsDam);
    });

    test('Should delete location correctly', async () => {
        let store = configureStore(__mockState);

        axios.delete.mockImplementation(() => {
            return Promise.resolve({ data: __mockLocationList[1] });
        });

        await store.dispatch(actions.deleteLocation(__mockLocationList[1]));
        let lastState = store.getState();
        const locationIndex = lastState.locations.findIndex(loct => loct && loct.id === __mockLocationList[1].id);
        expect(locationIndex === -1).toBeTruthy();
    });
});