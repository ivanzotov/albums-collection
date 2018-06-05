import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pick } from 'ramda'
import { Wrap } from './styles'
import { Loader, AlbumItem } from '..'
import actions from '../../actions'

const connector = connect(pick(['albums', 'loaders']))

class App extends Component {
  componentDidMount() {
    actions.albums.search({ query: 'lost tape' })
  }

  render() {
    const { albums, loaders } = this.props

    if (loaders.albums) return <Loader />
    return <Wrap>{albums.map(album => <AlbumItem key={album.id} album={album} />)}</Wrap>
  }
}

export default connector(App)
