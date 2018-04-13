import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List, SimpleListItem } from "rmwc/List";
import "./SideBar.css";
import { Card } from "rmwc/Card";
import API from "../../utils/API";
import { TextField } from 'rmwc/TextField';
import { Button, ButtonIcon } from "rmwc/Button";
import { Typography } from "rmwc/Typography";

class SideBar extends Component {
  constructor(props){
    super(props);
    this.state = { 
      user: { 
        id: 1
      }, 
      conversations: []
    };  
  }
  componentDidMount() {
    this.loadConversation();
  }

  loadConversation = () => {
      // this.setState({ conversations: API.conversation.getConversations() });
      API.getConversation(this.state.user.id)
        .then(res => this.setState({conversation: res.data}))
        .catch(err => console.log(err));
  };

  render() {
    return <Card style={{ width: "30%" }} className="sidebar-background-color">
        <TextField className="sidebar-inputSearch" withLeadingIcon="search" label="Search..." use="message" />
        <List twoLine>
          {this.state.conversations.map(conversation =>
            <SimpleListItem
              key={conversation.id}
              tag={Link}
              to={`/chat/${conversation.id}`}
              text={conversation.persons}
              secondaryText={conversation.message}
            />
          )}
        </List>
        <div className="sidebar-title">
          <Typography use="title">Messages</Typography>
          <Button className="sidebar-button">
            <ButtonIcon className="sidebar-buttonIcon" use="chat bubble outline" />
          </Button>
        </div>
      </Card>;
  }
}
export default SideBar;
    
