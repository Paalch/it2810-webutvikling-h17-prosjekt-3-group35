import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import renderer from 'react-test-renderer'
import AppointmentList from "../../containers/schedule/AppointmentList";


Enzyme.configure({ adapter: new Adapter() })


describe('Checks that the appointmentList component renders correctly', () => {

    it('Checks that appointmentList renders', () => {
        const rendered = renderer.create(
            <AppointmentList />
        );
        expect(rendered.toJSON()).toMatchSnapshot()
    });

});
