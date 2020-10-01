// full dom rendering testing
import React from 'react'
import { mount } from 'enzyme'
import CommentBox from '../CommentBox'
import "../../setupTests.js"


// adding wrapper around before each test
let wrapper;
beforeEach(() => {
   wrapper = mount(<CommentBox />); 
})
// cleaning wrapper around after each test
afterEach(() => {
    wrapper.unmount();
})


// test 1 - shows a text area and button
it('has a text area and a button', () => {
    expect(wrapper.find('textarea').length).toEqual(1)
    expect(wrapper.find('button').length).toEqual(1)
})


// find, simulate change/click , provide a fake object, force update the compoenent 

// test 2 - Users can enter input the text and able to submit it
it('can enter input the text and able to submit it', () => {
    wrapper.find('textarea').simulate('change', {
        target : {value:'new new comment'}
    });
    wrapper.update()
    
    expect(wrapper.find('textarea').prop('value')).toEqual('new new comment')
})


// test 3 - when the input get sumbitted text area gets null
it('when form is submitted, text area gets empty', () => {
    wrapper.find('textarea').simulate('change', {
        target : {value:'new new comment'}
    });
    wrapper.update()
    expect(wrapper.find('textarea').prop('value')).toEqual('new new comment')
    wrapper.find('form').simulate('submit');
    wrapper.update()
    expect(wrapper.find('textarea').prop('value')).toEqual('')
})