import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import TodoElement from '../../containers/todo/TodoElement'
import Adapter from 'enzyme-adapter-react-15'
import renderer from 'react-test-renderer'
Enzyme.configure({ adapter: new Adapter() })

describe('Checks that TodoElement renders correctly', () => {

    //define todo
    const value = 2
    let testFunction = (test) => {return null}
    const todo = {value: value, removeElement: testFunction, id:0}

    it('renders correctly', () => {
        const rendered = renderer.create(
            <TodoElement todo={todo} />
        );
        expect(rendered.toJSON()).toMatchSnapshot()
    });

    it('Checks that the label gets the correct value' , () => {
        //Creates the wrapper, using shallow
        const wrapper = shallow(<TodoElement todo={todo}/>)
        expect(wrapper.find('label').text()).toBe(value.toString())

    })

    });