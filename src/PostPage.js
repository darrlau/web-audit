import React, { Component } from "react";

import Post from "./Post";
import { firestore } from "../Firebase";

import { collectIdsAndDocs } from "./utilities";

import { withRouter, Link } from "react-router-dom";
import Factors from "./Factors";

class PostPage extends Component {
  state = {
    post: null,
    comments: [],
    loaded: false
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
        post,
        loaded: true
      });
    });

    // this.unsubscribeFromComments = this.commentsRef.onSnapshot(snapshot => {
    //   const comments = snapshot.docs.map(collectIdsAndDocs);
    //   this.setState({
    //     comments
    //   });
    // });
  };

  createComment = comment => {
    console.log(comment, "the comment");
    this.commentsRef.add({
      ...comment
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromPost();
    this.unsubscribeFromComments();
  };

  render() {
    // const { match } = this.props;
    const { post, comments } = this.state;

    return (
      <div>
        {post && <Post {...post} />}
        <Factors comments={comments} onCreate={this.createComment} />
        <footer>
          <Link to="/">&larr; Back</Link>
        </footer>
      </div>
    );
  }
}

export default withRouter(PostPage);
