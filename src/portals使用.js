import React, { PureComponent } from 'react'
import ReactDom from 'react-dom'

class Modal extends PureComponent {
    render() {
        // 创建独立与任何组件的DOM元素
        return ReactDom.createPortal(
            this.props.children,
            document.querySelector("#modal")
        )
    }
}
export default class App extends PureComponent {
    render() {
        return (
            <Modal>
                <h2>Title</h2>
            </Modal>
        )
    }
}
