import React, { Component } from "react";
import { List, SimpleListItem } from "rmwc/List";
import "./SideBar.css";
import { Card } from "rmwc/Card";
import { TextField } from 'rmwc/TextField';
import { Button, ButtonIcon } from "rmwc/Button";
import { Typography } from "rmwc/Typography";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connectedUsers: []
    };

    this.connectedUsersHandler = this.connectedUsersHandler.bind(this);

    props.socket.on("CONNECTED_USERS", this.connectedUsersHandler);
  }

  connectedUsersHandler(data) {
    this.setState({ connectedUsers: data });
  }

  render() {
    return (
      <Card style={{ width: "30%" }} className="sidebar-background-color">
        <TextField
          className="sidebar-inputSearch"
          withLeadingIcon="search"
          label="Search..."
          use="message"
        />
        <List twoLine>
          {this.state.connectedUsers.map(user =>
            <SimpleListItem key={user.id} text={user.name} />
          )}
        </List>
        <div className="sidebar-title">
          <Typography use="title">Messages</Typography>
          <Button className="sidebar-button">
            <ButtonIcon
              className="sidebar-buttonIcon"
              use="chat bubble outline"
            />
          </Button>
        </div>
      </Card>
    );
  }
}

export default SideBar;

