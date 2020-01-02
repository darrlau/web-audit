import React from "react";

import { firestore } from "../Firebase";

const Post = ({ title, id, onRemove }) => {
  const postRef = firestore.doc(`posts/${id}`);

  const remove = () => postRef.delete();

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
