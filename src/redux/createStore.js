/**
 * @param {*} reducer 处理函数
 * @param {*} preloadedState 初始状态
 */

 export default function createStore(reducer, preloadedState) {
  let state = preloadedState
  let currentListeners = []
  function getState(){
    return state
  }
  function subscribe(listener){
    currentListeners.push(listener)
    // 返回一个取消订阅
    return function(){
      let index = currentListeners.indexOf(listener)
      currentListeners.splice(index, 1) // 把此监听函数删除掉
    }
  }
  function dispatch(action) {
    state = reducer(state, action)
    currentListeners.forEach(listener => listener())
    return action
  }
  // 初始化默认值，type为自定义
  dispatch({type: '@@redux/INIT'})
  return {
    getState,
    subscribe,
    dispatch
  }
 }
