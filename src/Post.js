import React from "react";

const Post = ({ title, id }) => {
  return (
    <div className="posts-mapped">
      {title}, {id}
    </div>
  );
};

export default Post;
