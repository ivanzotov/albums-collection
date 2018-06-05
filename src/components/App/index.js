import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pick } from 'ramda'
import { Wrap } from './styles'
import actions from '../../actions'

const connector = connect(pick(['albums']))

class App extends Component {
  componentDidMount() {
    actions.albums.search({ query: 'lost tape' })
  }

  render() {
    const { albums } = this.props

    return <Wrap>{albums.map(album => <div key={album.id}>{album.title}</div>)}</Wrap>
  }
}

export default connector(App)
