import { createStore } from '../redux'
import * as types from './action-types'

let initialState = { number: 0 }

function reducer( state = initialState, action) {
  switch (action.type)  {
    case types.ADD:
      return { ...state, number: state.number + (action.amount || 1) };
    case types.MINUS:
      return  { ...state, number: state.number - (action.amount || 1) }
    default: 
      return state
  }
}

let store = createStore(reducer)

export default store