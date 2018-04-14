import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List, SimpleListItem } from "rmwc/List";
import "./SideBar.css";
import { Card } from "rmwc/Card";
import ChatAPI from "../../utils/chatApi";
import { connect } from "react-redux";
import { TextField } from 'rmwc/TextField';
import { Button, ButtonIcon } from "rmwc/Button";
import { Typography } from "rmwc/Typography";

class SideBar extends Component {
  constructor(props){
    super(props);
    this.state = { 
      chatMessage: "",
      conversations: [] 
    };  
  }
  componentDidMount() {
    this.loadConversation();
  }

  loadConversation = () => {
      ChatAPI.getConversationsByUser(this.props.userId)
        .then(res => this.setState({ conversations: res.data }))
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

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    username: state.user.username,
    userId: state.user._id,
  };
};

export default connect(mapStateToProps, {})(SideBar);

