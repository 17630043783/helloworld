import { createStore, combineReducers } from 'redux';
import homestore from './home/store';

//conbineReducers可以用来组合各个分reducer
const reducer = combineReducers({
  homestore
})
//创建 Redux store 来存放应用的状态。
// createStore 通过传入 我们的 reducer 形成一个全局唯一的 store, 
// 这个形成的 store 是一个对象，它有3个方法，分别是：
// store.dispatch()
// store.subscribe()  
// store.getState()
const store = createStore(reducer);

export default store