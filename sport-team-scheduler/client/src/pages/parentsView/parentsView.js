import React from "react";
import {Link} from 'react-router-dom';
import { Button, ButtonIcon } from 'rmwc/Button';
import Weather from "./../../components/weatherApi";
import MyMapComponent from "./../../components/Map"
import "./parentsView.css";

const parentsView = () =>
  <div className="container">
  	<div className="col-lg-3" />
  	<div className="col-lg-6">
    <Weather />
    <MyMapComponent />
        <Button stroked id="rosterbtn"><Link className="rosterbtn" to="/roster"><h5>View Roster</h5></Link></Button>
    <Button stroked id="schedulebtn"><Link className="schedulebtn" to="/schedule"><h5>View Schedule</h5></Link></Button>
  	</div>
  	<div className="col-lg-3" />
  </div>;



export default parentsView;