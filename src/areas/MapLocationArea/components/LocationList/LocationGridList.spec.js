import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom'
import LocationGridList from './LocationGridList'
import { __mockLocationList } from '../../../../../__mocks__/__mockState';


describe("LocationGridList component", () => {
    test('Should render correctly', () => {
        const component = mount(<LocationGridList />);
        expect(component).toMatchSnapshot();
        component.unmount();
    });

    test('Should render location list corretly', () => {
        const component = mount(
            <BrowserRouter>
                <LocationGridList data={__mockLocationList} />
            </BrowserRouter>
        );

        const gridListComponent = component.find(LocationGridList);
        expect(gridListComponent.props().data).toBe(__mockLocationList);

        //Heading:asserts to verfiy address
        const headTitles = component.find('.ant-card-head-title');

        expect(headTitles.get(0).props.children).toBe('Berlin');
        expect(headTitles.get(1).props.children).toBe('Munich');

        const bodyContents = component.find('.ant-card-body');
        const card1Body = bodyContents.get(0);
        const card2Body = bodyContents.get(1);

        //Body:asserts to verify address
        const address1 = card1Body.props.children[0];
        const address2 = card2Body.props.children[0];
        expect(address1.props.children.props.children).toBe('Berlin');
        expect(address2.props.children.props.children).toBe('Munich');

        //Body:asserts to verify latitude
        const lat1 = card1Body.props.children[1];
        const lat2 = card2Body.props.children[1];

        expect(lat1.props.children[1]).toBe("456");
        expect(lat2.props.children[1]).toBe("457");


        // //Body:asserts to verify longitude 
        const lng1 = card1Body.props.children[2];
        const lng2 = card2Body.props.children[2];

        expect(lng1.props.children[1]).toBe("123");
        expect(lng2.props.children[1]).toBe("124");

        component.unmount();
    });
});