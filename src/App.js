import React, { PureComponent, memo } from 'react';
/**
 * 处理函数组件的性能优化
 * 内部对newProps与oldProps进行浅比较 最终决定是否重新构建JSX树
 */
const MemoHeader = memo(
  function Header() {
    console.log("Header执行渲染函数")
    return (
      <div>
        我是头部Header组件
      </div>
    )
  })
/**
 * PureComponent类用于处理类组件的性能优化
 * 内部对newProps与oldProps、newState与oldState进行浅比较（执行shallowEqual函数）
 * 由比较结果来决定是否重新执行render函数 达到性能优化的目的
 */
class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      counter: 1,
      message: "start Message"
    }
  }
  render() {
    console.log("执行App渲染函数")
    const { counter, message } = this.state
    return (
      <>
        <MemoHeader />
        <p>{message}</p>
        <p>{counter}</p>
        <button onClick={() => this.increament()}>counter++</button>
      </>
    )
  }
  increament() {
    /**
     * setState的异步执行机制 react最终会将多个setState的操作进行合并 通过Object.assign进行合并
     * 也就是添加进队列Queue 最终去更新这个队列 源码中通过do while 去做的
     * 在执行队列的过程中 每次获取的都是最开始的state，将setState中传入的对象与旧的state对象进行合并产生新的对象
     * **如果setState传入的是一个对象** 那么更新队列每次获取的都是最开始的state中的数据进行assign合并
     */
    this.setState({
      counter: this.state.counter + 1
    })
    this.setState({
      message: "change Message"
    })
    // 如果传入的state是一个一个函数，那更新队列每次就可以拿到最新的preState以及props进行计算
    // 之后再进行合并
    this.setState((preState, nextProps) => ({
      counter: preState.counter + 1
    }))
    this.setState((preState, nextProps) => ({
      counter: preState.counter + 1
    }))
    // 执行完队列中的setState，将最终得到的State对象重新赋值给state，然后去调用render函数
    // 总结：最终只执行了一次render函数 这也就是异步更新的好处
  }
}

export default App;
