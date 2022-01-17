import React from 'react';
import PropTypes from "prop-types"

class App extends React.Component {
  /**
   * 作用：定义props的默认值
   * 该方式等同于下面的写法：
   * App.defaultProps = { name: 'coderlei' }
   */
  static defaultProps = {
    name: 'coderlei'
  }
  // 对props的属性进行约束
  static propTypes = {
    name: PropTypes.string.isRequired
  }
  render() {
    // 1. props是在父类定义的 但是挂载还是挂载到了子类上
    // 2. 构造函数默认就执行了super(props) 如果在构造函数中没有别的操作 可以省略构造函数的声明
    const { name } = this.props
    return (
      <div className="App">
        <h2>{name}</h2>
      </div>
    );
  }
  // 组件卸载前执行的钩子
  componentWillUnmount() { }
  // 组件挂载后执行的钩子
  componentDidMount() { }
  // 组件更新后执行的钩子
  componentDidUpdate() { }
  // 决定render函数是否需要重新渲染
  shouldComponentUpdate() { }
  // 获取更新前的数据(快照)
  getSnapshotBeforeUpdate() { }
}

export default App;
