import React from "react";
import CommentItem from "./CommentItem";
const Comment = props => {
  return (
    
      <div>
        {props.comment.map(i => {
          return <CommentItem commentitem={i} />;
        })}
      </div>

  );
};

export default Comment;
