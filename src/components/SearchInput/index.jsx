import React, { PureComponent } from 'react'
import { Input } from '..'
import { Wrap, Empty, Item, Dropdown } from './styles'

const EmptyComponent = () => (
  <Empty>Not found</Empty>
)

class ItemsComponent extends PureComponent {
  state = { focused: null }

  onMouseMove = (item) =>
    this.state.focused !== item &&
    this.setState({ focused: item })

  render() {
    const { children } = this.props

    return React.Children.map(children, child =>
      React.cloneElement(child, {
        active: this.state.focused &&
                this.state.focused.key === child.key,
        onMouseMove: () => this.onMouseMove(child),
      })
    )
  }
}

const ItemComponent = (props) => <Item {...props} />

export default class SearchInput extends PureComponent {
  static Empty = EmptyComponent
  static Items = ItemsComponent
  static Item = ItemComponent

  renderDropdown = ({ hide }) => {
    const { children } = this.props
    return (<Dropdown hide={hide}>{ children }</Dropdown>)
  }

  render() {
    return (
      <Wrap>
        <Input
          dropdown={({ focused }) =>
            this.renderDropdown({ hide: !focused })
          }
          { ...this.props }
        />
      </Wrap>
    )
  }
}
