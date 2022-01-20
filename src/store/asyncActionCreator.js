// redux-thunk actions
/**
 * dispatch用于派发我们的action
 * getState用于当我们在异步请求的过程中使用到了原来的state的数据，那么我们就可以使用getState获取
 * @param {Function} dispatch 
 * @param {Function} getState 
 */
export const requestAsyncAction = (dispatch, getState) => {
    // 该加强的action函数接受一个dispatch 从而让我们去调用同步的action
    console.log('拿到异步请求的结果 再去调用同步的action完成state的更新')
    // dispatch(changexxx(...args)) // 拿到异步请求的结果，然后执行同步的action操作
}