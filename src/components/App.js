import React from 'react'
import CommentList from './CommentList'
import CommentBox from './CommentBox'

const App = () => {
    return (
        <div style={{height:'100vh'}}>
            <CommentBox />
            <CommentList />
        </div>
    )
}

export default App
