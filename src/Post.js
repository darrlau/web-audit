import React from "react";

import { firestore } from "../Firebase";

const Post = ({ title, id }) => {
  const remove = () => {
    firestore.doc(`audit/${id}`).delete();
    console.log("worked");
  };

  return (
    <div className="posts-mapped">
      {title}, {id}
      <button className="delete" onClick={remove}>
        Delete
      </button>
    </div>
  );
};

export default Post;
