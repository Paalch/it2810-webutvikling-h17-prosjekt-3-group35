import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import renderer from 'react-test-renderer'
import Schedule from "../../containers/schedule/Schedule";


Enzyme.configure({ adapter: new Adapter() })


describe('Checks that the schedule component renders correctly', () => {

    it('Checks that schedule renders', () => {
        const rendered = renderer.create(
            <Schedule />
        );
        expect(rendered.toJSON()).toMatchSnapshot()
    });

});
