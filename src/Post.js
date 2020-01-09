import React, { useContext } from "react";

import { firestore } from "../Firebase";
import { UserContext } from "../providers/UserProvider";

import { Link } from "react-router-dom";

const belongsToCurrentUser = (currentUser, postAuthor) => {
  if (!currentUser) return false;

  return currentUser.uid === postAuthor.uid;
};

const Post = ({ title, id, user, general }) => {
  const currentUser = useContext(UserContext);
  // const postRef = firestore.doc(`posts/${id}`);

  const remove = () => {
    firestore.doc(`audit/${id}`).delete();
  };

  console.log(general[1].lifeguard, "this is general");

  return (
    <div className="posts-mapped">
      <Link to={`/posts/${id}`}>
        <h3>{title}</h3>
      </Link>
      {id}, {general[0].pH}
      {belongsToCurrentUser(currentUser, user) && (
        <button className="delete" onClick={remove}>
          Delete
        </button>
      )}
    </div>
  );
};

export default Post;
