import React from "react";
import Post from "./Post";
import AddPost from "./AddPost";

const ListItems = ({ posts, onCreate, onRemove }) => {
  return (
    <div className="posts-map">
      <AddPost onCreate={onCreate} />
      {posts.map(post => (
        <Post {...post} key={post.id} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default ListItems;
