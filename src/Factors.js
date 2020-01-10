import React, { Component } from "react";
import Comment from "./Comment";
import AddFactor from "./AddFactor";

export default class Factors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // posts: [],
      // user: null
    };
  }

  render() {
    console.log(this.props, "inside factors");
    return (
      <section>
        <div className="individual">
          <AddFactor />
          {this.props.comments.map(comment => (
            <Comment {...comment} key={comment.id} />
          ))}
        </div>
      </section>
    );
  }
}
