import React from 'react';
import { render, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import HeaderActions from './HeaderActions';

describe('HeaderActions component', () => {

    test("Should render correctly", () => {
        const component = render(<BrowserRouter>
            <HeaderActions></HeaderActions>
        </BrowserRouter>);
        expect(component).toMatchSnapshot();
    });

    test("Should call onAddMapClick", () => {
        const clickFn = jest.fn();
        const component = mount(<BrowserRouter>
            <HeaderActions onAddMapClick={clickFn}></HeaderActions>
        </BrowserRouter>);

        component.find('#btnAddMap').first().simulate('click');
        expect(clickFn).toBeCalled();
        component.unmount();
    });
});