import { PureComponent } from "react"
import { StoreContext } from "./context"

// 封装高阶组件connect 将依赖redux中的state传给需要组件的props
// 模拟redux的connect组件原理
export const connect = (mapStateToProps, mapDispatchToProps) => {
    return (WrapperComponent) => {
        return class extends PureComponent {
            // 设置context上下文 后续this.context就能是当前的context
            static contextType = StoreContext
            constructor(props, context) {
                super(props)
                this.state = {
                    // 组件所依赖的state
                    storeState: mapStateToProps(context.getState())
                }
            }
            render() {
                return (<WrapperComponent
                                        {...this.props} 
                                        {...this.state.storeState}
                                        {...mapDispatchToProps(this.context.dispatch)} />)
            }
            componentDidMount() {
                // 添加订阅
                this.unSubscribe = this.context.subscribe(() => {
                    // 当store中的state发生了改变 那么就通知我们的组件去执行render 
                    this.setState({
                        storeState: mapStateToProps(this.context.getState())
                    })
                })
            }
            componentWillUnmount() {
                // 卸载订阅
                this.unSubscribe()
            }
        }
    }
}