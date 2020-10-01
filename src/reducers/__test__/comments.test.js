import commentsReducer from '../comments'
import {SAVE_COMMENT} from '../../action/types'

// test 1 - handle action of type save Comment 


it('handle action of type save Comment ', () => {
    const action = {
        type:'SAVE_COMMENT',
        payload:'New comment kuch bhi'
    }
    const newState = commentsReducer([], action)
    expect(newState).toEqual(['New comment kuch bhi'])
})
