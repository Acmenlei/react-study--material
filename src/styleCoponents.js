import React, { PureComponent } from 'react'
import styled from 'styled-components'
// 通常将此处抽离
const AppWrapper = styled.div`
    background: yellow;
    .title {
        color: red;
    }
`;

export default class styleCoponents extends PureComponent {
    render() {
        debugger
        return (
            <AppWrapper>
                <div>
                    <h2 className='title'>标题</h2>
                </div>
            </AppWrapper>
        )
    }
}
