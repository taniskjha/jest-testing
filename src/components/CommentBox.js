import React, {useState} from 'react'

const CommentBox = () => {
    const [comment, setComment] = useState('')
    const handleChange = (e) => {
    setComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setComment('')
    }
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height:'100vh'}}>
            <form onSubmit={handleSubmit}>
            <h4>Dukaan App review</h4>
            <textarea value={comment} onChange={handleChange} style={{marginBottom:'4px'}}></textarea>
            <br />
            <button style={{backgroundColor:'red', color: 'white', padding:'4px',borderRadius:'8px', pointerEvents: 'cursor'}} >Submit Review</button>
            </form>
        </div>
    )
}

export default CommentBox
