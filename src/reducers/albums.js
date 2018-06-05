import { Albums } from '../presenters'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALBUMS_RES':
      return Albums(action.payload)
    default:
      return state
  }
}
