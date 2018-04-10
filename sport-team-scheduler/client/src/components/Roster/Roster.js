import React from "react";
import {Link} from 'react-router-dom';
import "./Roster.css";

const Roster = () => (

	<form>
            
    <button id="add-roster" type="submit" className={window.location.pathname === "/roster" ? "active" : ""}><Link className="btn1" to="/roster">Create Roster</Link></button>

 	</form>
  
     
    );


export default Roster;



 