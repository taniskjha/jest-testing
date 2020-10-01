// full dom rendering testing
import React from 'react'
import { mount } from 'enzyme'
import CommentList from '../CommentList'
import "../../setupTests.js"
import Root from '../../Root.js'


// adding wrapper around before each test
let wrapper;
beforeEach(() => {
       const initalState = {
           comments: ['Comment 1', 'Comment 2', 'Comment 3']
       }

        wrapper = mount( <Root initalState={initalState}><CommentList /></Root>); 
})
// cleaning wrapper around after each test
afterEach(() => {
    wrapper.unmount();
})


// test 1 - it creates only one li per element 
it('creates on li per element', () => {
   expect(wrapper.find('li').length).toEqual(3);
})