import React from "react";
import {Link} from 'react-router-dom';
import "./Schedule.css";

const Schedule = () => (

	<form>
            
    <button id="add-schedule" type="submit" className={window.location.pathname === "/schedule" ? "active" : ""}><Link className="schedule" to="/schedule">Create Schedule</Link></button>


 	</form>
  
     
    );


export default Schedule;