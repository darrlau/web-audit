import React from "react";
import Comment from "./Comment";
import AddComment from "./AddComment";

const Comments = ({ comments, onCreate }) => {
  return (
    <div className="Comments">
      <AddComment onCreate={onCreate} />
      {comments.map(comment => (
        <Comment {...comment} key={comment.id} />
      ))}
    </div>
  );
};

export default Comments;
