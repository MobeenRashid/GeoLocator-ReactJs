import React from 'react';
import AddMap, { mapStateToProps } from './AddMap';
import { BrowserRouter } from 'react-router-dom';
import { render, mount } from 'enzyme';
import { Provider } from 'react-redux';
// import TestRenderer from 'react-test-renderer';
import axios from 'axios';
import configureStore from '../../../store/configureStore'
import { __mockState, __mockLocationList } from '../../../../__mocks__/__mockState';
import MapSearchDrawer from './MapSearch/MapSearchDrawer';

jest.mock('axios');

describe('AddMap Component', () => {

    test('Should map state to props correctly', () => {
        var componentProps = mapStateToProps(__mockState);
        expect(componentProps.locationData).toEqual(__mockState.locations);
    });

    test("Should render correctly", () => {
        const store = configureStore(__mockState);
        const component = render(<Provider store={store}>
            <BrowserRouter>
                <AddMap />
            </BrowserRouter>
        </Provider>);
        expect(component).toMatchSnapshot();
    });

    test.skip("Should add location correctly", () => {
        const store = configureStore(__mockState);
        const component = mount(<Provider store={store}>
            <BrowserRouter>
                <AddMap />
            </BrowserRouter>
        </Provider>);
        let __potsDam = {
            id: '3',
            address: 'Potsdam',
            lat: '786',
            lng: '787'
        }
        component.find(MapSearchDrawer).props().onLocationSelect(__potsDam)

        axios.post.mockImplementation(() => Promise.resolve({ data: __potsDam }));
        component.find('#btnAddLocation').first().simulate('click');

        const lastState = store.getState();
        const location = lastState.locations.find(loct => loct && loct.id === __potsDam.id);
        expect(location).toBe(__potsDam);

        component.unmount();
    });
})