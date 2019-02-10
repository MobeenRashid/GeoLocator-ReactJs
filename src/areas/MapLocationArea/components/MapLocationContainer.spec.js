import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../../store/configureStore'
import { __mockState } from '../../../../__mocks__/__mockState';
import MapLocationContainer, { mapStateToProps } from './MapLocationContainer';

const store = configureStore(__mockState);
describe('MapLocationContainer Component', () => {

    test('Should map state to props correctly', () => {
        var componentProps = mapStateToProps(__mockState);
        expect(componentProps.locationData).toEqual(__mockState.locations);
    });

    test("Should render correctly", () => {
        const component = render(<Provider store={store}>
            <BrowserRouter>
                <MapLocationContainer />
            </BrowserRouter>
        </Provider>);
        expect(component).toMatchSnapshot();
    });
});