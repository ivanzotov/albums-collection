import { dissoc } from 'ramda'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'MY_ALBUMS_LOAD':
      return action.payload
    case 'MY_ALBUMS_ADD':
      return { ...state, [action.payload.id]: action.payload }
    case 'MY_ALBUMS_REMOVE':
      return dissoc(action.payload.id, state)
    default:
      return state
  }
}
