import api from '../api'
import { dispatch } from '../lib/store'

export const search = async (params = {}) => {
  dispatch({ type: 'GET_ALBUMS_REQ' })

  try {
    const { data } = await api.albums.search(params)
    dispatch({ type: 'GET_ALBUMS_RES', payload: data })
    return data
  } catch (error) {
    dispatch({ type: 'GET_ALBUMS_ERR', payload: error })
    return Promise.reject(error)
  }
}
