import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
  static propTypes = {

  }

  constructor (props) {
    super(props)

    this.state = {
      name: 'Rodrigo'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Rodrigo 1'
      })
    }, 2000)
  }

  render () {
    console.log('*******************Parent Comp render **************')
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name}></MemoComp>
        <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp>
      </div>
    )
  }
}

export default ParentComp
