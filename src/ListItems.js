import React, { useContext } from "react";
import Post from "./Post";
import AddPost from "./AddPost";
import { PostsContext } from "../providers/PostsProvider";

const ListItems = () => {
  const posts = useContext(PostsContext);

  return (
    <div className="posts-map">
      <AddPost />
      {posts.map(post => (
        <Post {...post} key={post.id} />
      ))}
    </div>
  );

  // <div className="posts-map">
  //   <AddPost onCreate={onCreate} />
  //   <PostsContext.Consumer>
  //     {posts => posts.map(post => <Post {...post} key={post.id} />)}
  //   </PostsContext.Consumer>
  // </div>
};

export default ListItems;
