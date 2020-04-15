import React, { Component } from 'react'

class LifecycleB extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: 'Rodrigo'
    }
    console.log('LifecycleB constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('LifecycleB componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('LifecycleB shouldComponentUpdate')
    return true
  }

  getSnapshopBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleB getSnapshopBeforeUpdate')
    return null
  }

  componentDidUpdate() {
    console.log('LifecycleB componentDidUpdate')
  }

  render () {
    console.log('LifecycleB render')
    return (
      <div>
        <div>Lifecycle B</div>
        <button onClick={this.changeState}>Change State {this.state.name}</button>
      </div>
    )
  }
}

export default LifecycleB
