import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ClickCounterTwo extends Component {
  static propTypes = {

  }


  render () {
    const { count, incrementCount } = this.props
    return (
      <button onClick={incrementCount}>Click { count } times</button>
    )
  }
}

export default ClickCounterTwo
