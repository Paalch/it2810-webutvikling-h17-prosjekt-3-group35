import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import renderer from 'react-test-renderer'
import Appointment from "../../containers/schedule/Appointment";


Enzyme.configure({ adapter: new Adapter() })


describe('Checks that the schedule component renders correctly', () => {

    it('Checks that Appointment renders', () => {
        const rendered = renderer.create(
            <Appointment />
        );
        expect(rendered.toJSON()).toMatchSnapshot()
    });

});
