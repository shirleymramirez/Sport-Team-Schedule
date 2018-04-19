import React from "react";
import {Link} from 'react-router-dom';
import { Button } from 'rmwc/Button';
import { Grid, GridCell } from 'rmwc/Grid';
import { Typography } from 'rmwc/Typography';
import './Home.css';
import soccerBall from "./images/soccer2.jpg"


const Home = () => 
<div> 

  <div className="main-container">
    <div className="jumbotron">
      <center><h1>Sports Team Scheduler</h1></center>
      	<img className="soccerBall" alt="soccerball" src={soccerBall} width="100%" height="100%" />

    </div>
  </div>

<Typography use="title" ><center><h3>I am a...</h3></center></Typography>

	<Grid>
	  <GridCell span="4"></GridCell>
	  <GridCell span="4">
	  <center>
	  	<Button stroked id="btn1" ><Link className="btn1" to="/login">Parent</Link></Button>
	  	<Button stroked id="btn2" ><Link className="btn2" to="/login">Coach</Link></Button>
	  </center>
	  </GridCell>
	  <GridCell span="4"></GridCell>
	</Grid>
<br />
<br />
</div>




export default Home;
