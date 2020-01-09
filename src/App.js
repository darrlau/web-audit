import React from "react";
import "./styles.less";
import Audit from "./Audit";
import ListItems from "./ListItems";
// import { auth, createUserProfileDocument } from "../Firebase";
import "regenerator-runtime/runtime";
import Authentication from "./Authentication";
import UserProfile from "./UserProfile";

import { Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // posts: [],
      // user: null
    };
  }

  // // Refactored and now inside the provider
  // unsubscribeFromFirestore = null;
  // unsubscribeFromAuth = null;

  componentDidMount = async () => {
    // // Old Way Before Unsubscribe/Subscribe
    // const snapshot = await firestore.collection("audit").get();
    // const posts = snapshot.docs.map(doc => {
    //   return { id: doc.id, ...doc.data() };
    // });
    // console.log(posts, "here are all the documents");
    // this.setState({
    //   posts: posts
    // });
    // // This is the new subscribe/unsubscribe
    // // Refactored and now inside the provider
    // this.unsubscribeFromFirestore = firestore
    //   .collection("audit")
    //   .onSnapshot(snapshot => {
    //     const posts = snapshot.docs.map(doc => {
    //       return { id: doc.id, ...doc.data() };
    //     });
    //     this.setState({ posts });
    //   });
    // Returns a promise with the user object (OR NULL)
    // // Refactored and now inside the provider
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   const user = await createUserProfileDocument(userAuth);
    //   console.log(user, "this is user from unsubscribe");
    //   this.setState({ user });
    // });
  };

  componentWillUnmount = () => {
    // this.unsubscribeFromFirestore();
    // this.unsubscribeFromAuth();
  };

  // handleCreate = async post => {
  //   // Old Way Before Unsubscribe/Subscribe
  //   // const { posts } = this.state;

  //   // // This gets the document Reference
  //   // // Async POST ... leading to AWAIT
  //   // const docRef = await firestore.collection("audit").add(post);

  //   // // Returns the document snapshot
  //   // // Also Async POST ... leading to AWAIT
  //   // const doc = await docRef.get();
  //   // console.log(docRef, "this is the docRef");

  //   // const newPost = doc => {
  //   //   return { id: doc.id, ...doc.data() };
  //   // };

  //   // this.setState({
  //   //   posts: [newPost, ...posts]
  //   // });
  //   firestore.collection("audit").add(post);
  // };

  // handleRemove = async id => {
  //   // // Old Way Before Unsubscribe/Subscribe
  //   // const allPosts = this.state.posts;

  //   // await firestore.doc(`audit/${id}`).delete();

  //   // const posts = allPosts.filter(post => post.id !== id);
  //   // this.setState({ posts });

  //   firestore.doc(`audit/${id}`).delete();
  // };

  render() {
    return (
      <div className="main-body">
        <div className="top-header">
          <Link to="/">
            <h1 className="top-logo">BPS Audit</h1>
          </Link>
        </div>
        <div className="audit-body">
          <Audit></Audit>
          <Authentication />
          <Switch>
            <Route exact path="/" component={ListItems} />
            <Route exact path="/profile" component={UserProfile} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
