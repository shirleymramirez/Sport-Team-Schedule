import React from "react";
import {Link} from 'react-router-dom';
import "./Schedule.css";

const Schedule = () => (

	<form>
            
    <button id="add-schedule" type="submit" className={window.location.pathname === "/createschedule" ? "active" : ""}><Link className="createschedule" to="/createschedule">Create Schedule</Link></button>


 	</form>
  
     
    );


export default Schedule;