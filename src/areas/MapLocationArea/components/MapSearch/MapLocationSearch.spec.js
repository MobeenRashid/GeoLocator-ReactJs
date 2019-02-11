import React from 'react';
import { mount } from 'enzyme';
import TestRenderer from 'react-test-renderer';
import MapLocationSearch from './MapLocationSearch';
import { Provider } from 'react-redux';
import configureStore from '../../../../store/configureStore';
import { __mockState } from '../../../../../__mocks__/__mockState';

const store = configureStore(__mockState);
describe("Map location search", () => {

    test("Should render correctly", () => {
        const component = mount(<Provider store={store}>
            <MapLocationSearch />
        </Provider>);
        expect(component).toMatchSnapshot();
        component.unmount();
    });

    test.skip('Should accept user input correctly', () => {
        const component = TestRenderer.create(<Provider store={store}>
            <MapLocationSearch />
        </Provider>);

        const inputSearch = component.root.findByProps({ className: 'location-input' });
        inputSearch.props.onChange({ target: { value: 'Berline' } });
        expect(inputSearch.props.value).toBe('Berline');
    });
});