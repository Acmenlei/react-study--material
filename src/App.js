import React, { PureComponent, createRef } from 'react';

class Counter extends PureComponent {
  render() {
    return (
      <div>
        counter
      </div>
    )
  }
  output() {
    console.log("输出语句")
  }
}


class App extends PureComponent {
  constructor(props) {
    super(props)
    // Refs
    this.counterRef = createRef()
    // Datas
    this.state = {
      counter: 1,
    }
  }
  render() {
    const { counter } = this.state
    return (
      <>
        <Counter ref={ this.counterRef } />
        <button onClick={() => this.change()}>counter++</button>
      </>
    )
  }
  change() {
    // 使用ref对象
    this.counterRef.current.output()
  }
}

export default App;
