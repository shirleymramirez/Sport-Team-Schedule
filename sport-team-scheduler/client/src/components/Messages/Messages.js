import React from "react";
import "./Messages.css";
import { ToolbarFixedAdjust } from "rmwc/Toolbar";
import { List, SimpleListItem } from "rmwc/List";
import MessagesInput from './MessagesInput';
import ChatHeader from "../../components/ChatHeader";

const Messages = () =>
  <div className="chat-messages">
    <ChatHeader />
    <ToolbarFixedAdjust className="messages-content-view">
      <List twoLine className="messages-content-view-color">
        <SimpleListItem 
          graphic="Shirley"
          text="Shirley"
          secondaryText="Chat Messages"
        />
        <SimpleListItem
          graphic="Kassi"
          text="Kassi"
          secondaryText="Chat Messages"
        />
        <SimpleListItem
          graphic="Derrick"
          text="Derrick"
          secondaryText="Chat Messages"
        />
        <SimpleListItem
          graphic="Bryant"
          text="Bryant"
          secondaryText="Chat Messages"
        />
      </List>
    </ToolbarFixedAdjust>
    <MessagesInput />
  </div>;

export default Messages;
