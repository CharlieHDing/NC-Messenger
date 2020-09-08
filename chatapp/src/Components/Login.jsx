import React, { Component } from "react";
import { navigate } from "@reach/router";

class Login extends Component {
  state = {
    username: "",
    url: "",
  };
  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="username">Enter Username</label>
        <input
          type="text"
          id="username"
          required={true}
          onChange={this.onChange}
        />{" "}
        <br />
        <label htmlFor="url">Enter Avatar URL</label>
        <input
          type="url"
          name="url"
          id="url"
          placeholder="https://example.com"
          pattern="https://.*"
          size="30"
          required
          onChange={this.onChange}
        />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }

  onChange = (changeEvent) => {
    const inputField = changeEvent.target.id;
    const inputValue = changeEvent.target.value;
    this.setState({ [inputField]: inputValue });
  };

  onSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    navigate("/chat", {
      state: { username: this.state.username, url: this.state.url },
    });
  };
}

export default Login;
