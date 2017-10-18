import React from 'react'
import renderer from 'react-test-renderer'
import Main from '../containers/main/Main'


describe('Checks that the Main component renders correctly', () => {
    it('Checks that the mainpage renders', () => {
        const rendered = renderer.create(
            <Main />
        );
        expect(rendered.toJSON()).toMatchSnapshot()
    });
});