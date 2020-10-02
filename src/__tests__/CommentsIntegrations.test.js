import React from 'react'
import { mount } from 'enzyme'
import "../setupTests.js"
import Root from '../Root.js'
import App from '../components/App.js'

it('can fetch a list of comments and display them', () => {
    // attempt to render the entire app
    const wrapper = mount(
        <Root>
            <App />
        </Root>
    )

    // find the 'fetchComments' buttons and click it

    // Expect to find a list of comments
})