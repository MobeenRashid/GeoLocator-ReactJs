import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import MapSearchDrawer from './MapSearchDrawer';
import { Provider } from 'react-redux';
import configureStore from '../../../../store/configureStore';
import { __mockState } from '../../../../../__mocks__/__mockState';

const store = configureStore(__mockState);
describe("Map search drawer", () => {
    test("Should render correctly", () => {
        const component = mount(<Provider store={store}>
            <BrowserRouter>
                <MapSearchDrawer></MapSearchDrawer>
            </BrowserRouter>
        </Provider>);
        expect(component).toMatchSnapshot();
        component.unmount();
    });
});