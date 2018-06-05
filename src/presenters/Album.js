import { pathOr } from 'ramda'
import Artist from './Artist'

export default raw => {
  const presenter = { ...raw }
  presenter.artists = pathOr([], ['artist-credit'])(presenter).map(it => Artist(it['artist']))
  presenter.artistsNames = presenter.artists.map(it => it.name).join(', ')
  return presenter
}
