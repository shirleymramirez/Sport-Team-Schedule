import React from "react";
import Roster from "./../../components/Roster";
import CoachViewMessages from "./../../components/CoachViewMessages";
import Schedule from "./../../components/Schedule";

const CoachView = () =>
  <div>
    <Roster />
    <Schedule />
    <CoachViewMessages />
  </div>;

export default CoachView;

