import React, {useState} from 'react'
import {connect} from 'react-redux'
import * as actions from '../action'

const CommentBox = (props) => {
    console.log("Output: CommentBox -> props", props)
    const [comment, setComment] = useState('')
    const handleChange = (e) => {
    setComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.saveComment(comment)
        setComment('')
    }
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <form onSubmit={comment !== '' ? handleSubmit : null}>
            <h4>Dukaan App review</h4>
            <textarea required value={comment} onChange={handleChange} style={{marginBottom:'4px'}}></textarea>
            <br />
            <button type="submit" style={{backgroundColor:'red', color: 'white', padding:'4px',borderRadius:'8px', pointerEvents: 'cursor'}} >Submit Review</button>
            </form>
        </div>
    )
}

export default connect(null,actions)(CommentBox)
