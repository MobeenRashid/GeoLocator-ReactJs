import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import MapSearchDrawer from './MapSearchDrawer';

describe("Map search drawer", () => {
    test("Should render correctly", () => {
        const component = mount(<BrowserRouter>
            <MapSearchDrawer></MapSearchDrawer>
        </BrowserRouter>);
        expect(component).toMatchSnapshot();
        component.unmount();
    });
});