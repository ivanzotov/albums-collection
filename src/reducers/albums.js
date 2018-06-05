import { Albums } from '../presenters'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALBUMS_RES':
      return Albums(action.payload)
    case 'ALBUMS_CLEAR':
      return initialState
    default:
      return state
  }
}
