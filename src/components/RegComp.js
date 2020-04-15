import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RegComp extends Component {
  static propTypes = {

  }

  constructor (props) {
    super(props)

    this.state = {

    }
  }

  render () {
    console.log('Reg Comp render **************')
    return (
      <div>
        Regular Component {this.props.name}
      </div>
    )
  }
}

export default RegComp
