import React from "react";
import {Link} from 'react-router-dom';
import {
  Toolbar,
  ToolbarRow,
  ToolbarTitle,
  ToolbarSection,
  ToolbarMenuIcon
} from "rmwc/Toolbar";
import { SimpleMenu, MenuItem } from 'rmwc/Menu';
import { Button } from 'rmwc/Button';


import "./Nav.css";

const Nav = () =>
  <Toolbar>
    <ToolbarRow>
      <ToolbarSection alignStart>
          <SimpleMenu 
            handle={ <Button raised><h5> Menu </h5></Button> }>
            <MenuItem className={window.location.pathname === "/" ? "active" : ""}><Link className="home" to="/">Home</Link></MenuItem>
            <MenuItem className={window.location.pathname === "/chat" ? "active" : ""}><Link className="chat" to="/chat">Chat</Link></MenuItem>
            <MenuItem className={window.location.pathname === "/schedule" ? "active" : ""}><Link className="schedule" to="/schedule">Schedule</Link></MenuItem>
            <MenuItem className={window.location.pathname === "/roster" ? "active" : ""}><Link className="roster" to="/roster">Team Roster</Link></MenuItem>
          </SimpleMenu>
        <ToolbarTitle>Sport Team Scheduler</ToolbarTitle>
      </ToolbarSection>
    </ToolbarRow>
  </Toolbar>;


export default Nav;