import { SAVE_COMMENT } from '../action/types.js'

export  function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}