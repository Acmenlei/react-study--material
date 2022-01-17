import React, { Component } from 'react';

function Profile() {
  return (
    <div>
      <ProfileHeader />
    </div>
  )
}

/**
 * 1. createContext接收一个默认值
 * 2. context对象拥有一个Provider组件 value属性用来设置需要共享的数据
 */
const UserContext = React.createContext({ nickname: 'coder', age: 20 })
/*
 * 1. 类组件的context使用方式
class ProfileHeader extends Component {
  // 关键一步指定Context对象 这样才能拿到context共享的值
  static contextType = UserContext
  render() {
    const { nickname, age } = this.context
    return (
      <>
        <p>{nickname}</p>
        <p>{age}</p>
      </>
    )
  }
}
*/
// 2. 函数组件的context使用方式 使用Consumer（消费者）组件进行包裹
function ProfileHeader() {
  return (
    <UserContext.Consumer>
      {
        // 这里的value就是Provider所共享的value
        (value) => {
          return (
            <>
              <p>{value.age}</p>
              <p>{value.nickname}</p>
            </>
          )
        }
      }
    </UserContext.Consumer>
  )
}
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: "coderlei",
      age: 22
    }
  }
  render() {
    return (
      // 使用context对象的Provider组件包裹父组件 并通过value共享数据
      // 后续子孙组件都能获取到共享的value的值
      // 如果将父组件放置到外部 那么子孙组件向上查找就会查找不到Provider 那么就会取默认值
      // 而且Provider是可以嵌套使用的 在使用多个context的情况下 但是这种代码看起来非常冗余 且丑
      <>
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>
      </>

    )
  }
}

export default App;
