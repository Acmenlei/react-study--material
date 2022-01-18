import React, { PureComponent } from 'react'
// 权限验证的高阶组件 后续只要有权限验证相关的组件
// 我们就可以使用高阶组件Auth包裹一层
const Auth = function (WrapperComponent) {
    return props => {
        if(props.isLogin) {
            return <WrapperComponent {...props}/>
        }
        return <Login/>
    }
}
class Admin extends PureComponent {
    render() {
        return (<div>管理员界面</div>)
    }
}
class Login extends PureComponent {
    render() {
        return (<div>请先去登录</div>)
    }
}
// 现在需要对管理员界面进行权限验证
const AuthAdmin = Auth(Admin)

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <AuthAdmin isLogin={true}/>
            </div>
        )
    }
}
