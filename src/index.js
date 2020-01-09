import React from "react";
import ReactDOM from "react-dom";
import "./styles.less";
import App from "./App";
import PostsProvider from "../providers/PostsProvider";
import UserProvider from "../providers/UserProvider";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <UserProvider>
      <PostsProvider>
        <App />
      </PostsProvider>
    </UserProvider>
  </Router>,

  document.getElementById("root")
);
