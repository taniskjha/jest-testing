import {saveComment} from '../index.js';
import {SAVE_COMMENT} from '../types.js'


describe('saveComment', () => {
    it('has the correct type', () => {
      const action = saveComment()
      expect(action.type).toEqual(SAVE_COMMENT)
    })

    it('has the correct payload', () => {
        const action = saveComment('new commment hai bro')
        expect(action.payload).toEqual('new commment hai bro')
    })
})