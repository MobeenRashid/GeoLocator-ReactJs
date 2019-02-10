import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';
import { __mockState } from '../../../__mocks__/__mockState';
import MapLocationContainer from './components/MapLocationContainer';

const store = configureStore(__mockState);
describe('MapLocationArea Component', () => {
    test.only("Should render correctly", () => {
        const component = mount(<Provider store={store}>
            <BrowserRouter>
                <MapLocationContainer />
            </BrowserRouter>
        </Provider>);
        expect(component).toMatchSnapshot();
    });
});