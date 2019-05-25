import React from 'react';
import Avatar from './Avatar';
import Comment from './Comment'

function CommentBox(props) {
    return (
        <div className="CommentBox">
            <Avatar
                imgUrl={props.author.imgUrl}
                name={props.author.name}
            />
            <Comment
                text={props.text}
                date={props.date}
            />
        </div>
    );
}

export default CommentBox;