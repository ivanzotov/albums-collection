import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pick, values } from 'ramda'
import { Wrap } from './styles'
import actions from '../../actions'
import { Loader, SearchInput, MyAlbumItem } from '..'

const connector = connect(pick(['albums', 'myAlbums', 'loaders']))

class App extends Component {
  componentWillMount() {
    actions.albums.load()
  }

  onSearchInputChange = query => {
    // TODO: debounce and request overlapping
    actions.albums.search({ query })
  }

  onAlbumClick = album => {
    const { dispatch } = this.props

    if (album.isSaved()) {
      dispatch({ type: 'MY_ALBUMS_REMOVE', payload: album })
    } else {
      dispatch({ type: 'MY_ALBUMS_ADD', payload: album })
    }
  }

  renderAlbumsDropdown = () => {
    const { loaders, albums } = this.props

    if (loaders.albums) return <Loader />
    if (albums.length === 0) return <SearchInput.Empty />

    return (
      <SearchInput.Items>
        {albums.map(album => (
          <SearchInput.Item
            key={album.id}
            highlight={album.isSaved()}
            onMouseDown={() => this.onAlbumClick(album)}
          >
            {album.name}
          </SearchInput.Item>
        ))}
      </SearchInput.Items>
    )
  }

  render() {
    const { myAlbums } = this.props

    return (
      <Wrap>
        <SearchInput onChangeText={this.onSearchInputChange}>
          {this.renderAlbumsDropdown()}
        </SearchInput>
        {values(myAlbums).map(it => <MyAlbumItem key={it.id} album={it} />)}
      </Wrap>
    )
  }
}

export default connector(App)
