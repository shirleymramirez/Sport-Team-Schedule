import React from "react";
import Roster from "./../../components/Roster";
// import { Messages } from "./../../components/Messages";
import SideBar from "../../components/SideBar";
import Schedule from "./../../components/Schedule";

const CoachView = () =>
  <div>
    <Roster />
    <Schedule />
    <SideBar />
  </div>;

export default CoachView;

