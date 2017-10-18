import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import renderer from 'react-test-renderer'
import CreateAppointment from "../../containers/schedule/CreateAppointment";


Enzyme.configure({ adapter: new Adapter() })


describe('Checks that the createNewAppointment component renders correctly', () => {

    it('Checks that newAppointment renders', () => {
        const rendered = renderer.create(
            <CreateAppointment
                onCreateAppointment={ () => {return false}}
                idCounter={0}
                showModal={false}
                closeNewAppointment={ () => {return false}}/>
        );
        expect(rendered.toJSON()).toMatchSnapshot()
    });



});
