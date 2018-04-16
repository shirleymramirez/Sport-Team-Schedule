import React from "react";
import {Link} from 'react-router-dom';
import { Button} from 'rmwc/Button';
import Weather from "./../../components/weatherApi";
import MyMapComponent from "./../../components/Map"
import "./parentsView.css";

const parentsView = () => (
  <div className="container">
  	<div className="col-lg-3" />
  	<div className="col-lg-6">
      <Weather />
      <MyMapComponent />
      <Button stroked id="rosterbtn">
        <Link className="rosterbtn" to="/roster">View Roster</Link>
      </Button>
      <Button stroked id="schedulebtn">
        <Link className="schedulebtn" to="/schedule">View Schedule</Link>
      </Button>
    </div>
  	<div className="col-lg-3" />
  </div> 
);

export default parentsView;