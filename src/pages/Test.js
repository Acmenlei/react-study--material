import React, { PureComponent } from 'react';
import { connect } from '@/utils/connect';
import { incAction, decAction } from "@/store/actionsCreator"
import { requestAsyncAction } from "@/store/asyncActionCreator"

class Test extends PureComponent {
    render() {
        return <div>
            <h2>Test</h2>
            <p>目前的counter值：{this.props.counter}</p>
            <button onClick={() => this.props.increament()}>++</button>
            <button onClick={() => this.props.decreament()}>--</button>
            <button onClick={() => this.props.requestAsyncAction()}>异步request</button>
        </div>;
    }
}
// 定义需要依赖的state 以及 action
const mapStateToProps = (state) => ({ counter: state.counter })
const mapDispatchToProps = (dispatch) => ({
    // sync action
    increament() {
        dispatch(incAction())
    },
    decreament() {
        dispatch(decAction())
    },
    // async action
    requestAsyncAction() {
        // 这里不是我们来执行 而是redux内部会帮助我们执行
        dispatch(requestAsyncAction)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Test)
