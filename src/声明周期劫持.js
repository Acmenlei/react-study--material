import React, { PureComponent } from 'react'
// 计算它们的渲染时间的 高阶组件
const renderTime = function (WrapperComponent) {
    // 返回一个组件
    return class extends PureComponent {
        componentWillMount() {
            this.startTime = Date.now()
        }
        render() {
            return (
                <WrapperComponent />
            )
        }
        componentDidMount() {
            this.endTime = Date.now()
            console.log(WrapperComponent.name + "的渲染时间：", this.endTime - this.startTime)
        }
    }
}

class Home extends PureComponent {
    render() {
        return <div>home page</div>
    }
}
class About extends PureComponent {
    render() {
        return <div>about page</div>
    }
}

const RenderTimeHome = renderTime(Home)
const RenderTimeAbout = renderTime(About)

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <RenderTimeHome />
                <RenderTimeAbout />
            </div>
        )
    }
}
