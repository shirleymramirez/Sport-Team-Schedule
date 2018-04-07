import React from "react";
import "./MessageInput.css";
import TextField from "rmwc/TextField";

const MessagesInput = () =>
  <div className="message-input">
    <TextField className="chat-messagesInput" textarea fullwidth label="Type a message..." rows="2" />
  </div>;

export default MessagesInput;