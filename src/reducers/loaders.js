const initialState = {
  albums: false,
}

const set = (value: boolean, state) => (loader: string) => ({ ...state, [loader]: value })

export default (state = initialState, action) => {
  const on = set(true, state)
  const off = set(false, state)

  switch (action.type) {
    case 'GET_ALBUMS_REQ':
      return on('albums')
    case 'GET_ALBUMS_RES':
    case 'GET_ALBUMS_ERR':
      return off('albums')
    default:
      return state
  }
}
