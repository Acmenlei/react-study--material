import { useState, useEffect } from "react"

export default function Counter() {
  let [counter, setCounter] = useState(0)
  function increament() {
    /**
     * 这种做法和setState一样 同样都是入队 合并为一个setCounter
     * 最终counter它只会加1
     * setCounter(++counter)
     * setCounter(++counter)
     * setCounter(++counter)
     */
    /**
     * 而下面的操作其实和setState传入回调函数的效果是一致的
     */
    setCounter((preCounter) => ++preCounter)
    setCounter((preCounter) => ++preCounter)
    setCounter((preCounter) => ++preCounter)
  }
  // Effect副作用 组件渲染完毕会执行的回调
  useEffect(() => {
    document.title = counter
    console.log("组件挂载/componentDidMount")
    // 返回的回调函数在当前组件发生更新、卸载的时候会执行
    // 添加第二个参数数组的话 更新数据就不会执行返回的回调函数
    return () => {
      console.log("组件卸载/componentWillUnmount")
    }
  }, []);

  return (
    <>
      <p>counter: {counter}</p>
      <button onClick={() => increament()}>++</button>
      <button onClick={() => setCounter(--counter)}>--</button>
    </>
  )
}