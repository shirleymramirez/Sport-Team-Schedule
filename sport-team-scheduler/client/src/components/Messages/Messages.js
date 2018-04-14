import React, { Component } from "react";
import "./Messages.css";
import { ToolbarFixedAdjust } from "rmwc/Toolbar";
import API from "../../utils/API";
import { List, SimpleListItem } from "rmwc/List";
import MessageInput from "./MessageInput";
import ChatHeader from "../../components/ChatHeader";
import socketIOClient from "socket.io-client";

let runningId = 10;

class Messages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        id: 1,
        name: 'Shirley'
      },
      chatMessage: "",
      messages: []
    };
    this.socket = socketIOClient("localhost:3001");

    this.socket.on("RECEIVE_MESSAGE", function(data) {
      addMessage(data);
    });

    const addMessage = data => {
      console.log(data);
      this.setState({ messages: [...this.state.messages, data] });
    };
  }

  componentDidMount() {
      API.getConversationsByUser(this.state.user.id)
        .then(res => this.setSetate({chatMessage: res.data}))
        .catch(err =>console.log(err));
      //  this.setState({
      // chatMessage: API.conversation.getConversation()[0].id});
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      const chatMessage = this.state.chatMessage;
      this.setState({ chatMessage: "" });
      this.socket.emit("SEND_MESSAGE", {
        username: this.state.username,
        chatMessage,
        id: runningId
      });
      runningId += 1;
      event.preventDefault();
    } else {
      this.setState({ chatMessage: event.target.value });
    }
  }

  render() {
    return <div className="chat-messages">
        <ChatHeader />
        <ToolbarFixedAdjust className="messages-content-view">
          <List twoLine className="messages-content-view-color">
            {this.state.messages.length > 0 && this.state.messages.map(
                message =>
                  <SimpleListItem
                    key={message.id}
                    text={message.username}
                    secondaryText={message.chatMessage}
                  />
              )}
          </List>
        </ToolbarFixedAdjust>
        <MessageInput value={this.state.chatMessage} onKeyPress={this.handleKeyPress} />
      </div>;
  }
}
export default Messages; 
