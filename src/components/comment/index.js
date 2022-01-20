import React, { PureComponent } from 'react'
import { Comment, Tooltip } from "antd"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import CommentWrapper from "./style"

export default class CommentList extends PureComponent {
    render() {
        const { commentsList } = this.props
        return (
            <CommentWrapper>
                {/* 动画组 对内部的list做动画效果 */}
            <TransitionGroup>
                {
                    commentsList.map((item, index) => {
                        const { username, avatar, dateTime, content, id } = item
                        // 必须添加唯一的key 因为在删除item的时候需要对item做移除动画
                        return <CSSTransition
                                            timeout={300}
                                            unmountOnExit
                                            classNames="comment-item"
                                            key={id}> 
                            <Comment
                                    key={id}
                                    actions={[<span onClick={this.deleteCommentItem.bind(this, index)}>删除</span>]}
                                    author={<a href='/#'>{username}</a>}
                                    avatar={avatar}
                                    content={content}
                                    datetime={
                                            <Tooltip
                                                    placement="top"
                                                    title={dateTime.format("YYYY-MM-DD HH:mm:ss")}>
                                                    {dateTime.fromNow()}
                                            </Tooltip>}
                                />
                        </CSSTransition>

                    })
                }
            </TransitionGroup>
            </CommentWrapper>
        )
    }
    deleteCommentItem(index) {
        this.props.deleteCommentItem(index)
    }
}
