import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import renderer from 'react-test-renderer'
import NoteElement from '../../containers/notes/NoteElement'

Enzyme.configure({ adapter: new Adapter() })
describe('Checks the NoteElement component', () => {

    const note = { text:'test', id:1}

    it('Checks that NoteElement renders', () => {
        const rendered = renderer.create(

            <NoteElement  note = {note} key = {0}  updateTextFiled = {()=>{return}}  deleteNote = {() => {return}}/>
        );
        expect(rendered.toJSON()).toMatchSnapshot()
    });
});
