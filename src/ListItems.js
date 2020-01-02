import React from "react";
import Post from "./Post";
import AddPost from "./AddPost";

const ListItems = ({ posts, onCreate }) => {
  return (
    <div className="posts-map">
      <AddPost onCreate={onCreate} />
      {posts.map(post => (
        <Post {...post} key={post.id} />
      ))}
    </div>
  );
};

export default ListItems;
