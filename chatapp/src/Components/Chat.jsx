import React, { Component } from "react";

class Chat extends Component {
  state = {
    username: this.props.location.state
      ? this.props.location.state.username
      : null,
    url: this.props.location.state ? this.props.location.state.url : null,
  };
  render() {
    const { username, url } = this.state;
    //https://chaewonkong.github.io/posts/socket-io.html#Sending-and-Receiving-Messages
    if (!username || !url) {
      ///return error page
      console.log("In the error render...");
    }

    return <section>chat goes here....</section>;
  }
}

export default Chat;
