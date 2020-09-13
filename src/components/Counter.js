import React from 'react'
import { bindActionCreators } from '../redux'
import store from '../store'
import actions from '../store/actions/counter.js'
let boundActions = bindActionCreators( actions, store.dispatch)

export default class Counter extends React.Component {
  state = { value: store.getState().number }
  componentDidMount(){
    this.unsubsctribe = store.subscribe(() => {
      this.setState({value: store.getState().number })
    })
  }
  componentWillUnmount(){
    this.unsubsctribe()
  }
  render () {
    return (
      <>
        <p>{this.state.value}</p>
        <button onClick={() => boundActions.add(3)}>+</button>
        <button onClick={() => boundActions.minus()}>-</button>
      </>
    )
  }
}