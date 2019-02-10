import React from 'react';
import { mount } from 'enzyme';
import TestRenderer from 'react-test-renderer';
import MapLocationSearch from './MapLocationSearch';

describe("Map location search", () => {

    test("Should render correctly", () => {
        const component = mount(<MapLocationSearch></MapLocationSearch>);
        expect(component).toMatchSnapshot();
        component.unmount();
    });

    test.skip('Should accept user input correctly', () => {
        const component = TestRenderer.create(<MapLocationSearch></MapLocationSearch>);
        console.log(component.toJSON());

        const inputSearch = component.root.findByProps({ className: 'location-input' });
        inputSearch.props.onChange({ target: { value: 'Berline' } });
        expect(inputSearch.props.value).toBe('Berline');
    });
});