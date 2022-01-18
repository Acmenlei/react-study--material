import React, { createContext, PureComponent } from 'react'
// 创建context
const UserContext = createContext()
// 结合context共享数据去封装高阶组件 给每个组件新增一些props属性
// 其实这块部分更像是对组件进行了一个劫持操作
function withUser(WrapperComponent) {
  return (props) => {
    return <UserContext.Consumer>
            {user => (<WrapperComponent {...props} {...user} />)}
          </UserContext.Consumer>
  }
}

class Home extends PureComponent {
  render() {
    const { nickName, avatar, name } = this.props
    return <>
      <p>{nickName}</p>
      <p>{avatar}</p>
      <p>{name}</p>
    </>
  }
}
// 使用高阶组件
const UserHome = withUser(Home)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>高阶组件的应用：</h1>
        {/* 给指定context提供数据 */}
        <UserContext.Provider value={{ nickName: 'coderlei', avatar: 'bear' }}>
          <UserHome name="xlx"/>
        </UserContext.Provider>
      </div>
    )
  }
}
