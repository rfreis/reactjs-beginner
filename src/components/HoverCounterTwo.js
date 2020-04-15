import React, { Component } from 'react'
import PropTypes from 'prop-types'

class HoverCounterTwo extends Component {
  static propTypes = {

  }

  render () {
    const { count, incrementCount } = this.props
    return (
      <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
    )
  }
}

export default HoverCounterTwo
