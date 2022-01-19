import React, { PureComponent } from 'react'
import { Input, Button } from "antd"
import moment from 'moment'

export default class CommentInput extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            value: ""
        }
    }
    render() {
        return (
            <>
                <Input.TextArea
                    rows={4}
                    value={this.state.value}
                    onChange={this.changeCommentInput.bind(this)} />
                <Button
                    style={{ marginTop: '10px' }}
                    type='primary'
                    onClick={this.submitComment.bind(this)}>发表评论</Button>
            </>
        )
    }
    // 受控组件
    changeCommentInput(event) {
        this.setState({ value: event.target.value })
    }
    submitComment() {
        // 父子通讯
        const commentItemInfo = {
            id: Date.now(),
            dateTime: moment(),
            username: 'coderlei',
            avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F4d%2F63%2Fbd%2F4d63bd0b3bf8cc9aa0dc3e1111646b1c.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645175929&t=51c8269088d69d3f6fc14975ee9afd52',
            content: this.state.value
        }
        this.props.submitComment(commentItemInfo)
        this.setState({ value: "" })
    }
}
