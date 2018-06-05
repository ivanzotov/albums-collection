import { pathOr } from 'ramda'
import { getState } from '../lib/store'
import Artist from './Artist'

export default raw => {
  const presenter = { ...raw }
  presenter.artists = pathOr([], ['artist-credit'])(presenter).map(it => Artist(it['artist']))
  presenter.artistsNames = presenter.artists.map(it => it.name).join(', ')
  presenter.name = `${presenter.title} (${presenter.artistsNames})`
  presenter.isSaved = () => !!getState().myAlbums[presenter.id]
  return presenter
}
