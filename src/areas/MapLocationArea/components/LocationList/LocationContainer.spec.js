import React from 'react';
import LocationContainer from './LocationContainer';
import { render, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { __mockState, __mockLocationList } from '../../../../../__mocks__/__mockState';
import configureStore from '../../../../store/configureStore';

const store = configureStore(__mockState);
describe("LocationContainer component", () => {
    test("Should render correctly", () => {
        const component = render(<Provider store={store}>
            <BrowserRouter>
                <LocationContainer fetchLocationsOnDidMount={() => (__mockLocationList)}
                    locationData={__mockLocationList} />
            </BrowserRouter>
        </Provider>);

        expect(component).toMatchSnapshot();
    });

    test("Should map locations correctly", () => {
        const component = mount(<Provider store={store}>
            <BrowserRouter>
                <LocationContainer locationData={__mockLocationList} />
            </BrowserRouter>
        </Provider>);

        let locationContainer = component.find(LocationContainer);
        expect(locationContainer.props().locationData).toEqual(__mockLocationList);
        component.unmount();
    });

    test("Should call onLocationDelete", () => {
        const deleteFn = jest.fn();
        const component = mount(<Provider store={store}>
            <BrowserRouter>
                <LocationContainer locationData={__mockLocationList} onLocationDelete={deleteFn} />
            </BrowserRouter>
        </Provider>);

        component.find(LocationContainer).props().onLocationDelete();
        expect(deleteFn).toBeCalled();
        component.unmount();
    });
});