import React from "react";
import ReactDOM from "react-dom";
import "./styles.less";
import App from "./App";
import PostsProvider from "../providers/PostsProvider";

ReactDOM.render(
  <PostsProvider>
    <App />
  </PostsProvider>,
  document.getElementById("root")
);
