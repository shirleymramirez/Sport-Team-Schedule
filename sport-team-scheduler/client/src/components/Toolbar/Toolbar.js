import React from "react";
import {
  Toolbar,
  ToolbarRow,
  ToolbarTitle,
  ToolbarSection,
  ToolbarMenuIcon
} from "rmwc/Toolbar";

import "./Toolbar.css";

const Navbar = () =>
  <Toolbar className="navbar">
    <ToolbarRow>
      <ToolbarSection alignStart>
        <ToolbarMenuIcon use="menu" />
        <ToolbarTitle>Sport Team Scheduler</ToolbarTitle>
      </ToolbarSection>
    </ToolbarRow>
  </Toolbar>;
export default Navbar;