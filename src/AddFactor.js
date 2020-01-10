import React, { Component } from "react";

export default class AddFactor extends Component {
  constructor() {
    super();
    this.state = {
      content: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      content: ""
    });
  };

  render() {
    const { content } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="add-factor">
          <input
            type="text"
            name="content"
            placeholder="comment"
            value={content}
            onChange={this.handleChange}
          />
          <input className="create" type="submit" value="Create Comment" />
        </form>
      </div>
    );
  }
}
