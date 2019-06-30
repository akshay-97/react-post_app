import React from 'react';

const CommentItem = (props) => {
    return (
        <div className="col-sm-12 shadow p-3 mb-5 bg-white rounded">
            {props.commentitem}
        </div>
    );
}

export default CommentItem;
