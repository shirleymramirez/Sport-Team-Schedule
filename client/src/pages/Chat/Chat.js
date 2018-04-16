import React, { Component } from "react";
import "./Chat.css";
import SideBar from "../../components/SideBar";
import { Messages } from "../../components/Messages";
import io from "socket.io-client";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: io()
    }
  }
  render() {
    return <div className="chatBoard">
        <SideBar socket={this.state.socket} />
        <Messages socket={this.state.socket} />
      </div>
  };
}
export default Chat; 