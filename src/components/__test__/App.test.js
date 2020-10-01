import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App.js'
import {shallow} from 'enzyme'
import CommentBox from '../CommentBox'
import CommentList from '../CommentList'
import "../../setupTests.js"

// adding wrapper around before each test
let wrapper;
beforeEach(() => {
   wrapper = shallow(<App />); 
})

// this test if comment box renders inside app
it('renders a comment box', () => {
   expect(wrapper.find(CommentBox).length).toEqual(1)
})

// this test if comment box renders inside app
it('renders a comment box', () => {
     expect(wrapper.find(CommentList).length).toEqual(1)
 })
 