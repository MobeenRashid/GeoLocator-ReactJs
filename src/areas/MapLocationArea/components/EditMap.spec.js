import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, mount } from 'enzyme';
import { Provider } from 'react-redux';
import axios from 'axios';
import configureStore from '../../../store/configureStore'
import { __mockState, __mockLocationList } from '../../../../__mocks__/__mockState';
import MapSearchDrawer from './MapSearch/MapSearchDrawer';
import EditMap, { mapStateToProps } from './EditMap';

jest.mock('axios');

describe('EditMap Component', () => {

    test('Should map state to props correctly', () => {
        var componentProps = mapStateToProps(__mockState);
        expect(componentProps.locationData).toEqual(__mockState.locations);
    });

    test("Should render correctly", () => {
        const store = configureStore(__mockState);
        const component = render(<Provider store={store}>
            <BrowserRouter>
                <EditMap />
            </BrowserRouter>
        </Provider>);
        expect(component).toMatchSnapshot();
    });

    test("Should update location correctly", () => {
        const store = configureStore(__mockState);
        const component = mount(<Provider store={store}>
            <BrowserRouter>
                <EditMap />
            </BrowserRouter>
        </Provider>);

        let __potsDam = __mockLocationList[0];
        __potsDam.address = 'Potsdam';

        component.find(MapSearchDrawer).props().onLocationSelect(__potsDam)

        axios.put.mockImplementation(() => Promise.resolve({ data: __potsDam }));
        component.find('#btnUpdateLocation').first().simulate('click');

        const lastState = store.getState();
        const location = lastState.locations.find(loct => loct && loct.id === __potsDam.id);
        expect(location).toBe(__potsDam);

        component.unmount();
    });
});