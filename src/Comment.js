import React from "react";
import CommentItem from "./CommentItem";
const Comment = props => {
  return (
      <div>
        {props.comments.map(i => {
          return <CommentItem commentitem={i} />;
        })}
      </div>

  );
};

export default Comment;
