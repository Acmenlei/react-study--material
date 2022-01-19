import React, { PureComponent } from 'react'
import styled, { ThemeProvider } from 'styled-components'
// 通常将此处抽离
const AppWrapperDIVCSS = {
    borderColor: 'green' // 定义css变量 这里的css变量是固定的
}
const AppWrapper = styled.div.attrs(AppWrapperDIVCSS)`
    // 动态的css
    background: ${props => props.theme.background};
    border: 3px solid ${props => props.borderColor}; // 动态css是其他css与处理器做不到的
    button {
        color: ${props => props.theme.color};
    }
`;
export default class styleCoponents extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            bg: 'red'
        }
    }
    render() {
        console.log("render")
        return (
            // 共享theme属性到所有样式组件的props中
            <ThemeProvider theme={{ color: 'white', background: 'red' }}>
                {/* 在样式组件上传递bg 在样式组件的props中可以获取到这个响应式的bg */}
                <AppWrapper bg={this.state.bg}>
                    <div>
                        <h2 className='title'>标题</h2>
                        <button onClick={() => this.setState({ bg: 'yellow' })}>change BG</button>
                    </div>
                </AppWrapper>
            </ThemeProvider>
        )
    }
}
