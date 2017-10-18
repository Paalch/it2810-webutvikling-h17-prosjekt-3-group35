import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Todo from '../../containers/todo/Todo'
import Adapter from 'enzyme-adapter-react-15'
import renderer from 'react-test-renderer'
import TodoList from '../../containers/todo/TodoList'


Enzyme.configure({ adapter: new Adapter() })


describe('Checks that the todo component renders correctly', () => {

    //checks that todo render, by compareing snapshot
    it('Checks that Todo renders', () => {
        const rendered = renderer.create(
            <Todo />
        );
        expect(rendered.toJSON()).toMatchSnapshot()
    });

    //Checks that only one todolist is renderd
    it('Checks that TodoList renders', () => {
        const wrapper = shallow(<Todo />);
        expect(wrapper.find(TodoList)).toHaveLength(1);
    });
});