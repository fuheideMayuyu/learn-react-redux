import { createStore } from './redux'
let counterValue = document.getElementById('counter-value')
let addBtn = document.getElementById('add-btn')
let minusBtn = document.getElementById('minus-btn')
const ADD='ADD'
const MINUS = 'MINUS'
let initialState = 0

function reducer( state = initialState, action) {
  switch (action.type)  {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1
    default: 
      return state
  }
}

let store = createStore(reducer)

function render() {
  counterValue.innerHTML = store.getState()
}

store.subscribe(render)

addBtn.addEventListener('click', () => {
  store.dispatch({type: ADD})
})

minusBtn.addEventListener('click', () => {
  store.dispatch({type: MINUS})
})