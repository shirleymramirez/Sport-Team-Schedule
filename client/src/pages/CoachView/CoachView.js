import React from "react";
import {Link} from 'react-router-dom';
import { Button } from 'rmwc/Button';
import Weather from "./../../components/weatherApi";
import MyMapComponent from "./../../components/Map";

const CoachView = () =>
  <div className="container">
  	<div className="col-lg-3" />
  	<div className="col-lg-6">
    <Weather />
    <MyMapComponent />
    <Button stroked id="rosterbtn"><Link to="/createroster"><h5>Create Roster</h5></Link></Button>
    <Button stroked id="schedulebtn"><Link to="/createschedule"><h5>Create Schedule</h5></Link></Button>
  	</div>
  	<div className="col-lg-3" />
  </div>;

export default CoachView;

