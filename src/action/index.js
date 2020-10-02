import { SAVE_COMMENT } from './types.js'

export  function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}