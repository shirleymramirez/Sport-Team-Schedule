import React from "react";
import {
  Toolbar,
  ToolbarRow,
  ToolbarTitle,
  ToolbarSection,
  ToolbarMenuIcon
} from "rmwc/Toolbar";

import "./Nav.css";

const Nav = () =>
  <Toolbar>
    <ToolbarRow>
      <ToolbarSection alignStart>
        <ToolbarMenuIcon use="menu" />
        <ToolbarTitle>Sport Team Scheduler</ToolbarTitle>
      </ToolbarSection>
    </ToolbarRow>
  </Toolbar>;
export default Nav;
