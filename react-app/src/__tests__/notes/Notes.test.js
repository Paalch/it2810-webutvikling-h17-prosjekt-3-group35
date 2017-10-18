import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Notes from '../../containers/notes/Notes'
import Adapter from 'enzyme-adapter-react-15'
import renderer from 'react-test-renderer'
import TodoList from '../../containers/todo/TodoList'


Enzyme.configure({ adapter: new Adapter() })


describe('Checks the Note component', () => {

    //checks that todo render, bt compareing snapshot
    it('Checks that Todo renders', () => {
        const rendered = renderer.create(
            <Notes />
        );
        expect(rendered.toJSON()).toMatchSnapshot()
    });


    it('Checks that new notes can be added', () => {
        const wrapper = shallow(<Notes />)

        //Simulates 2 button clicks
        wrapper.find('Button').simulate('click');
        wrapper.find('Button').simulate('click');

        //Checks that 2 new notes are createsd
        let state = wrapper.state().notes
        expect(state).toHaveLength(2)
    })


});