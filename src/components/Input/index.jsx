import React, { PureComponent } from 'react'
import { pick } from 'ramda'
import { Wrap, Element } from './styles'

export default class Input extends PureComponent {
  state = {
    focused: false,
  }

  onChange = (event: any) => {
    this.props.onChange && this.props.onChange(event)
    this.props.onChangeText && this.props.onChangeText(event.target.value)
  }

  onFocus = (event) => {
    this.setState({ focused: true }, () => {
      this.props.onFocus && this.props.onFocus(event)
    })
  }

  onBlur = (event) => {
    this.setState({ focused: false }, () => {
      this.props.onBlur && this.props.onBlur(event)
    })
  }

  onKeyDown = (event: *) => {
    if (event.keyCode === 13) {
      this.props.onSubmit && this.props.onSubmit(event)
    }

    this.props.onKeyDown && this.props.onKeyDown(event)
  }

  render() {
    const passedProps = pick([
      'placeholder',
      'autoFocus',
      'onFocus',
      'onBlur',
      'type',
      'hide',
      'value',
    ])(this.props)
    let { dropdown } = this.props

    return (
      <Wrap>
        <Element
          {...passedProps}
          focused={this.state.focused}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onKeyDown={this.onKeyDown}
          onChange={this.onChange}
        />
        { dropdown && dropdown({ focused: this.state.focused }) }
      </Wrap>
    )
  }
}
