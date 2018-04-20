import React, { Component } from "react";
import "./Messages.css";
import { ToolbarFixedAdjust } from "rmwc/Toolbar";
import ChatAPI from "../../utils/chatApi";
import UserAPI from "../../utils/userApi";
import { connect } from "react-redux";
import { List, SimpleListItem } from "rmwc/List";
import MessageInput from "./MessageInput";
import ChatHeader from "../../components/ChatHeader";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = { pendingMessage: "", messages: [], users: [] };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.receiveMessageHandler = this.receiveMessageHandler.bind(this);

    props.socket.on("RECEIVE_MESSAGE", this.receiveMessageHandler);
    props.socket.emit("JOIN", { id: props.userId, name: props.fullname });
  }
  
  //appending current messages to the existing messages in the database 
  receiveMessageHandler(data) {
    this.setState({ messages: [...this.state.messages, data] });
  }

  componentDidMount() {
    var self = this;
    UserAPI.getUsers().then(res => {
      self.setState({
        users: Object.assign(
          {},
          ...res.data.map(user => ({ [user._id]: user }))
        )
      });
      var newSelf = self;
      ChatAPI.getMessages()
        .then(res => {
         newSelf.setState({
            messages: res.data.map(message => {
              message.fullname = newSelf.state.users[message.author].name;
              return message;
            })
          });
        })
        .catch(err => console.log(err));
    });
  }

  componentWillUnmount() {
    this.props.socket.emit("LEAVE", { id: this.props.userId, name: this.props.fullname });
  }

  handleOnChange = event => {
    this.setState({ pendingMessage: event.target.value });
  }

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.props.socket.emit("SEND_MESSAGE", {
        fullname: this.props.fullname,
        body: this.state.pendingMessage,
        userId: this.props.userId
      });
      this.setState({ pendingMessage: "" });
      event.preventDefault();
    }
  };

  render() {
    return (
      <div className="chat-messages">
        <ChatHeader />
        <ToolbarFixedAdjust className="messages-content-view">
          <List twoLine className="messages-content-view-color">
            {this.state.messages.length > 0 &&
              this.state.messages.map(message =>
                <SimpleListItem
                  key={message.id}
                  text={message.fullname}
                  secondaryText={message.body}
                />
              )}
          </List>
        </ToolbarFixedAdjust>
        <MessageInput
          value={this.state.pendingMessage}
          onChange={this.handleOnChange}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    fullname: state.user.name,
    userId: state.user._id,
  };
};

export default connect(mapStateToProps, {})(Messages);
