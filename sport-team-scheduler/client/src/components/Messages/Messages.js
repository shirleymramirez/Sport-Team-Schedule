import React, { Component } from "react";
import "./Messages.css";
import { ToolbarFixedAdjust } from "rmwc/Toolbar";
import ChatAPI from "../../utils/chatApi";
import { connect } from "react-redux";
import { List, SimpleListItem } from "rmwc/List";
import MessageInput from "./MessageInput";
import ChatHeader from "../../components/ChatHeader";
import io from "socket.io-client";


class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: "",
      messages: []
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.socket = io();

    this.socket.on("RECEIVE_MESSAGE", function(data) {
      addMessage(data);
    });

    const addMessage = data => {
      console.log(data);
      this.setState({ messages: [...this.state.messages, data] });
    };
  }

  componentDidMount() {
    ChatAPI.getConversation(this.props.chatId)
      .then(res => this.setState({ messages: res.data }))
      .catch(err => console.log(err));
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      const chatMessage = this.state.chatMessage;
      this.setState({ chatMessage: "" });
      console.log(this.props);
      this.socket.emit("SEND_MESSAGE", {
        username: this.props.username,
        chatMessage,
        id: this.props.userId,
        //conversationId: chatId
      });
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

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    username: state.user.username,
    userId: state.user._id,
  };
};

export default connect(mapStateToProps, {})(Messages);
