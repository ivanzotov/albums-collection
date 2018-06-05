import React, { PureComponent } from 'react'
import { Wrap } from './styles'

class Item extends PureComponent {
  render() {
    const { children } = this.props

    return <Wrap>{children}</Wrap>
  }
}

export default Item
