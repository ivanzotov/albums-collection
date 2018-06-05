import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Wrap, Remove } from './styles'

const connector = connect()

class MyAlbumItem extends PureComponent {
  onRemove = () => {
    const { album, dispatch } = this.props
    dispatch({ type: 'MY_ALBUMS_REMOVE', payload: album })
  }

  render() {
    const { album } = this.props
    return (
      <Wrap>
        {album.name}
        <Remove onClick={this.onRemove}>Remove</Remove>
      </Wrap>
    )
  }
}

export default connector(MyAlbumItem)
