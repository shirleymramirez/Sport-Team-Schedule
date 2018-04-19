import React from "react";
import {Link} from 'react-router-dom';
import { Button } from 'rmwc/Button';
<<<<<<< HEAD:client/src/pages/CoachView/CoachView.js
=======
// import Roster from "./../../components/Roster";
// import Schedule from "./../../components/Schedule";
>>>>>>> 96048ef162291808bdf9f7ab6a283e3a0b3b5c50:client/src/pages/CoachView/CoachView.js
import Weather from "./../../components/weatherApi";
import MyMapComponent from "./../../components/Map"
import "./CoachView.css";

const CoachView = () =>
  <div className="container">
  	<div className="col-lg-3" />
  	<div className="col-lg-6">
    <Weather />
    <MyMapComponent />
    <Button stroked id="rosterbtn"><Link className="rosterbtn" to="/createroster"><h5>Create Roster</h5></Link></Button>
    <Button stroked id="schedulebtn"><Link className="schedulebtn" to="/createschedule"><h5>Create Schedule</h5></Link></Button>
  	</div>
  	<div className="col-lg-3" />
  </div>;

export default CoachView;

