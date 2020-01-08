import React from "react";
import Post from "./Post";
import AddPost from "./AddPost";
import { PostsContext } from "../providers/PostsProvider";

const ListItems = ({ onCreate }) => {
  return (
    <div className="posts-map">
      <AddPost onCreate={onCreate} />
      <PostsContext.Consumer>
        {posts => posts.map(post => <Post {...post} key={post.id} />)}
      </PostsContext.Consumer>
    </div>
  );
};

export default ListItems;
