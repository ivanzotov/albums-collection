import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { pick } from 'ramda'
import { Wrap } from './styles'

const connector = connect(pick(['myAlbums']))

class AlbumItem extends PureComponent {
  isSaved = () => {
    const {
      myAlbums,
      album: { id },
    } = this.props
    return !!myAlbums[id]
  }

  onClick = () => {
    const { dispatch, album } = this.props

    if (this.isSaved()) {
      dispatch({ type: 'MY_ALBUMS_REMOVE', payload: album })
    } else {
      dispatch({ type: 'MY_ALBUMS_ADD', payload: album })
    }
  }

  render() {
    const {
      album: { title, artistsNames },
    } = this.props

    return (
      <Wrap onClick={this.onClick} saved={this.isSaved()}>
        {title} ({artistsNames})
      </Wrap>
    )
  }
}

export default connector(AlbumItem)
