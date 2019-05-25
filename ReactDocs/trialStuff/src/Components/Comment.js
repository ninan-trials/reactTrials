import React from 'react';

function Comment(props) {
    return (
        <div className="Comment">
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {props.date.toDateString()}
            </div>
        </div>
    );
}

export default Comment;