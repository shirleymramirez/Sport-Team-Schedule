import React from "react";
// import Roster from "./../../components/Roster";
// import Schedule from "./../../components/Schedule";
import Weather from "./../../components/weatherApi";
import MyMapComponent from "./../../components/Map"

const parentsView = () =>
  <div className="container">
  	<div className="col-lg-3" />
  	<div className="col-lg-6">
    <Weather />
    <MyMapComponent />
  	</div>
  	<div className="col-lg-3" />
  </div>;

export default parentsView;