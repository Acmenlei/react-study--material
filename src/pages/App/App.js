import React, { PureComponent } from 'react'
import CommentList from '@components/comment'
import CommentInput from '@components/commentInput'
import AppWrapper from "./style"

export default class App extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            commentsList: []
        }
    }
    render() {
        return (
            <AppWrapper>
                <CommentList
                    deleteCommentItem={this.deleteCommentItem.bind(this)}
                    commentsList={this.state.commentsList} />
                <CommentInput
                    submitComment={this.submitComment.bind(this)} />
            </AppWrapper>
        )
    }
    // 发表评论
    submitComment(commentItem) {
        this.setState({
            commentsList: [...this.state.commentsList, commentItem]
        })
    }
    // 删除评论
    deleteCommentItem(index) {
        let commentsList = [...this.state.commentsList]
        commentsList.splice(index, 1)
        this.setState({ commentsList })
    }
}
