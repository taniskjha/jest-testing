import React from 'react'
import {connect} from 'react-redux'


const CommentList = (props) => {
console.log("Output: CommentList -> props", props)
   
    return (
        <div>
            <ul>
   {props.comments.map((comment, index) => {
    return <li key={index} >
      {comment}
    </li>
    })}
            </ul>
        </div>
    )
}

function mapStateToProps(state) {
    return {comments: state.comments}
}

export default connect(mapStateToProps) (CommentList)
