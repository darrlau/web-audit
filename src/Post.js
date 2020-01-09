import React, { useContext } from "react";

import { firestore } from "../Firebase";
import moment from "moment";
import { UserContext } from "../providers/UserProvider";

const belongsToCurrentUser = (currentUser, postAuthor) => {
  if (!currentUser) return false;

  return currentUser.uid === postAuthor.uid;
};

const Post = ({ title, id, user, createdAt }) => {
  const currentUser = useContext(UserContext);
  // const postRef = firestore.doc(`posts/${id}`);

  const remove = () => {
    firestore.doc(`audit/${id}`).delete();
  };

  return (
    <div className="posts-mapped">
      {title}, {id}, {user.uid},{moment(createdAt).calendar()}
      {belongsToCurrentUser(currentUser, user) && (
        <button className="delete" onClick={remove}>
          Delete
        </button>
      )}
    </div>
  );
};

export default Post;
