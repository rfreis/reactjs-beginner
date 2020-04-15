import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: 'Rodrigo'
    }
    console.log('LifecycleA constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('LifecycleA componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate')
    return true
  }

  getSnapshopBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleA getSnapshopBeforeUpdate')
    return null
  }

  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate')
  }

  changeState = () => {
    this.setState({
      name: 'Alohaa'
    })
  }

  render () {
    console.log('LifecycleA render')
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change State {this.state.name}</button>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA
