import React from "react";
import "./MessageInput.css";
import TextField from "rmwc/TextField";

const MessageInput = props => 
  <div className="message-input">
      <TextField className="chat-messagesInput" 
        textarea fullwidth label="Type a message..." 
        rows="2" value={props.value}
        onChange={props.onChange}
        onKeyPress={props.onKeyPress} />
    </div>;

export default MessageInput; 

