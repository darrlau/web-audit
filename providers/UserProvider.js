import React, { Component, createContext } from "react";
import { firestore } from "../Firebase";

export const UserContext = createContext();

class UserProvider extends Component {
  state = {
    posts: []
  };

  unsubscribeFromFirestore = null;

  componentDidMount = () => {
    this.unsubscribeFromFirestore = firestore
      .collection("audit")
      .onSnapshot(snapshot => {
        const posts = snapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() };
        });
        this.setState({ posts });
      });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
  };

  render() {
    const { posts } = this.state;
    const { children } = this.props;

    return (
      <UserContext.Provider value={posts}>{children}</UserContext.Provider>
    );
  }
}

export default UserProvider;
