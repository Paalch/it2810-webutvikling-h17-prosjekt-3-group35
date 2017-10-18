import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import TodoList from '../../containers/todo/TodoList'
import Adapter from 'enzyme-adapter-react-15'
import renderer from 'react-test-renderer'
import { saveTodo } from '../../containers/todo/TodoList'
Enzyme.configure({ adapter: new Adapter() })
import { Button } from 'react-bootstrap';


describe('Checks that the todo components renders correctly', () => {

    it('renders correctly', () => {
        const rendered = renderer.create(
            <TodoList />
        )
        expect(rendered.toJSON()).toMatchSnapshot()
    })

    it('Test that a empty value can not be added', () => {
        const wrapper = shallow(<TodoList/>)
        wrapper.find('Button').simulate('click');
        let state = wrapper.state().todos
        expect(state).toHaveLength(0)
    })

    it('Test that you can create a new todo', () => {
        const wrapper = shallow(<TodoList />)
        const input = wrapper.find('FormControl')
        input.value = 'I am a new todo'
        //Since javascript is async i need to wait for the state to update before i check the new state
        setTimeout(function(){
            wrapper.find('Button').simulate('click')
            let state = wrapper.state().todos
            expect(state).toHaveLength(1)
        }, 1);
    })

})