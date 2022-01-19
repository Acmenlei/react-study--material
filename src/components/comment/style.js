import styled from "styled-components"

export default styled.div`
    .comment-item-enter {
        opacity: 0;
        transform: scale(.6);
    }
    .comment-item-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: opacity 300ms, transform 300ms;
    }
    .comment-item-exit {
        opacity: 1;
        transform: scale(1);
    }
    .comment-item-exit-active {
        opacity: 0;
        transform: scale(.6);
        transition: opacity 300ms, transform 300ms;
    }
    .comment-item-exit-done {
        opacity: 0;
        transform: scale(0);
    }
`