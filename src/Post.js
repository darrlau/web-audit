import React from "react";

import { firestore } from "../Firebase";
import moment from "moment";

const Post = ({ title, id, createdAt }) => {
  const remove = () => {
    firestore.doc(`audit/${id}`).delete();
  };

  return (
    <div className="posts-mapped">
      {title}, {id}, {moment(createdAt).calendar()}
      <button className="delete" onClick={remove}>
        Delete
      </button>
    </div>
  );
};

export default Post;
