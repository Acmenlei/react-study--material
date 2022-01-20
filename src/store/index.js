import { createStore, applyMiddleware } from "redux"
import thunkMiddleWare from "redux-thunk"
import reducer from "./reducer"

// 加强我们的store 让我们的store在dispatch中可以传入函数 从而进行一些异步操作
export default createStore(reducer, applyMiddleware(thunkMiddleWare))