import React, { Component } from "react";

class AddPost extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      general: [
        {
          pH: 0,
          chlorine: 0
        },
        {
          safety: true,
          lifeguard: true
        },
        {
          done: false
        }
      ]
    };
  }

  handleChange = event => {
    const { title, value } = event.target;
    this.setState({
      [title]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { onCreate } = this.props;
    const { title, general } = this.state;

    const post = {
      title,
      general
    };

    onCreate(post);

    this.setState({
      title: ""
    });
  };

  render() {
    const { title } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="AddPost">
        <input
          type="text"
          title="title"
          placeholder="Title"
          value={title}
          onChange={this.handleChange}
        />
        <input className="create" type="submit" value="Create Post" />
      </form>
    );
  }
}

export default AddPost;
