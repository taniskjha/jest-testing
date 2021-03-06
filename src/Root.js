import React from 'react'
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

export default ({children, initalState}) => {
    return (
        <Provider store={createStore(reducers, initalState)} >
        {children}
        </Provider>
    )
}