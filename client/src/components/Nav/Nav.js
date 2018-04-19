import React from "react";
import {Link} from 'react-router-dom';
import {
  Toolbar,
  ToolbarRow,
  ToolbarTitle,
  ToolbarSection
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
            <MenuItem><Link className="home" to="/"><h4>Home</h4></Link></MenuItem>
            <MenuItem><Link className="chat" to="/chat"><h4>Chat</h4></Link></MenuItem>
            <MenuItem><Link className="schedule" to="/schedule"><h4>Schedule</h4></Link></MenuItem>
            <MenuItem><Link className="roster" to="/roster"><h4>Team Roster</h4></Link></MenuItem>
          </SimpleMenu>
        <ToolbarTitle>Sport Team Scheduler</ToolbarTitle>
      </ToolbarSection>
    </ToolbarRow>
  </Toolbar>;


export default Nav;