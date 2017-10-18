import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import renderer from 'react-test-renderer'
import AppointmentList from "../../containers/schedule/AppointmentList";
import moment from 'moment'

Enzyme.configure({ adapter: new Adapter() })


describe('Checks that the appointmentList component renders correctly', () => {
    let appointment = {
        date: moment(),
        time: moment(),
        details: 'sometext',
        id: 1,
        style: 'primary'
    };

    it('Checks that appointmentList renders', () => {
        const rendered = renderer.create(
            <AppointmentList
                appointments={[appointment]}
                onDeleteAppointment={ () => {return false}}/>
        );
        expect(rendered.toJSON()).toMatchSnapshot()
    });

});
