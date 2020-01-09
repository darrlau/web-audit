import React from "react";
import ReactDOM from "react-dom";
import "./styles.less";
import App from "./App";
import PostsProvider from "../providers/PostsProvider";
import UserProvider from "../providers/UserProvider";

ReactDOM.render(
  <UserProvider>
    <PostsProvider>
      <App />
    </PostsProvider>
  </UserProvider>,

  document.getElementById("root")
);
