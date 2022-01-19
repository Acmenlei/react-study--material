import React, { PureComponent } from 'react'
import { Comment, Tooltip } from "antd"

export default class CommentList extends PureComponent {
    render() {
        const { commentsList } = this.props
        return (
            <>
                {
                    commentsList.map((item, index) => {
                        const { username, avatar, dateTime, content, id } = item
                        return <Comment
                            key={id}
                            actions={[<span onClick={this.deleteCommentItem.bind(this, index)}>删除</span>]}
                            author={<a href='/#'>{username}</a>}
                            avatar={avatar}
                            content={content}
                            datetime={<Tooltip
                                placement="top"
                                title={dateTime.format("YYYY-MM-DD HH:mm:ss")}>
                                {dateTime.fromNow()}
                            </Tooltip>}
                        />
                    })
                }
            </>
        )
    }
    deleteCommentItem(index) {
        this.props.deleteCommentItem(index)
    }
}
