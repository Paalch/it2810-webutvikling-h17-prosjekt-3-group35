import React from 'react'
import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-15'
import BottomNav from '../containers/bottomNav/bottomNav'
import Enzyme, { shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

describe('Checks that the navbar renders and contains what it must', () => {
    it('Checks that the navbar renders', () => {
        const rendered = renderer.create(
            <BottomNav />
        );
        expect(rendered.toJSON()).toMatchSnapshot()
    });

    it('Checks that all parts of the app is in the navbar', () => {
        const wrapper = shallow(<BottomNav />);
        expect(wrapper.find('#todo').exists()).toBeTruthy();
        expect(wrapper.find('#notes').exists()).toBeTruthy();
        expect(wrapper.find('#schedule').exists()).toBeTruthy();
    });
});
