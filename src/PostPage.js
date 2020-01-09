import React, { Component } from "react";

import Post from "./Post";
import Comments from "./Comments";
import { firestore } from "../Firebase";

import { collectIdsAndDocs } from "./utilities";

import { withRouter } from "react-router-dom";

class PostPage extends Component {
  state = {
    post: null,
    comments: []
  };

  get postId() {
    return this.props.match.params.id;
  }

  get postRef() {
    return firestore.doc(`audit/${this.postId}`);
  }

  get commentsRef() {
    return this.postRef.collection("comments");
  }

  unsubscribeFromPost = null;
  unsubscribeFromComments = null;

  componentDidMount = async () => {
    this.unsubscribeFromPost = this.postRef.onSnapshot(snapshot => {
      const post = collectIdsAndDocs(snapshot);
      this.setState({
        post
      });
    });

    this.unsubscribeFromComments = this.commentsRef.onSnapshot(snapshot => {
      const comments = snapshot.docs.map(collectIdsAndDocs);
      this.setState({
        comments
      });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromPost();
    this.unsubscribeFromComments();
  };

  render() {
    // const { match } = this.props;
    const { post, comments } = this.state;
    console.log(this.props, "props inside postpage");
    console.log(this.state, "state inside postpage");
    return (
      <section>
        {post && <Post {...post} />}
        <Comments comments={comments} onCreate={() => {}} />
      </section>
    );
  }
}

export default withRouter(PostPage);
