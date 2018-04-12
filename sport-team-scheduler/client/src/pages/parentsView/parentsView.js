import React from "react";
import Roster from "./../../components/Roster";
import Schedule from "./../../components/Schedule";
import Weather from "./../../components/weatherApi";

const paerentsView = () =>
  <div className="container">
  	<div className="col-lg-3" />
  	<div className="col-lg-6">
    <Weather />
  	</div>
  	<div className="col-lg-3" />
  </div>;

export default paerentsView;