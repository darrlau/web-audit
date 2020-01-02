import React from "react";

const Post = ({ title, id, onRemove }) => {
  return (
    <div className="posts-mapped">
      {title}, {id}
      <button className="delete" onClick={() => onRemove(id)}>
        Delete
      </button>
    </div>
  );
};

export default Post;
