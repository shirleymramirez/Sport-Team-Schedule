import React from 'react';
import { List, SimpleListItem } from "rmwc/List";
import "./SideBar.css";
import { Card } from "rmwc/Card";
import { TextField } from 'rmwc/TextField';
import { Button, ButtonIcon } from "rmwc/Button";
import { Typography } from "rmwc/Typography";

const SideBar = () =>
  <Card style={{ width: "30%" }} className="sidebar-background-color">
    <TextField
      className="sidebar-inputSearch"
      withLeadingIcon="search"
      label="Search..."
      use="message"
    />
    <List twoLine>
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
    <div className="sidebar-title">
      <Typography use="title">Messages</Typography>
      <Button className="sidebar-button">
        <ButtonIcon className="sidebar-buttonIcon" use="chat bubble outline" />
      </Button>
    </div>
  </Card>;


export default SideBar;
    
