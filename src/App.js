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
      counter: 1
    }
  }
  render() {
    console.log("执行App渲染函数")
    const { counter } = this.state
    return (
      <>
        <MemoHeader />
        <p>{counter}</p>
        <button onClick={() => this.increament()}>counter++</button>
      </>
    )
  }
  increament() {
    // 保持数据的不可变性
    this.setState({
      counter: this.state.counter + 1
    })
  }
}

export default App;
