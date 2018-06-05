import { combineReducers } from 'redux'
import albums from './albums'
import loaders from './loaders'
import myAlbums from './myAlbums'

export default combineReducers({
  albums,
  loaders,
  myAlbums,
})
