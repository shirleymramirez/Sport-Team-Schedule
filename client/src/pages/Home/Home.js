import React from "react";
import {Link} from 'react-router-dom';
import { Button } from 'rmwc/Button';
import { Grid, GridCell } from 'rmwc/Grid';
import { Typography } from 'rmwc/Typography';
import './Home.css';
import soccerBall from "./images/soccer2.jpg"


const Home = () => (
	<div> 
		<div className="main-container">
			<div className="jumbotron">
				<center><h1>Sports Team Scheduler</h1></center>
					<img className="soccerBall" alt="soccer_ball" src={soccerBall} width="100%" height="100%" />
			</div>
		</div>
		<Typography use="title" ><center><h3>I am a...</h3></center></Typography>
		<div className="container">
				<center>
					<Button stroked id="btn1">
						{/* className={window.location.pathname === "/login" ? "active" : ""}> */}
						<Link className="btn1" to="/login"><h3>Parent</h3></Link>
					</Button>
					<Button stroked id="btn2" >
						{/* className={window.location.pathname === "/login" ? "active" : ""}> */}
						<Link className="btn2" to="/login"><h3>Coach</h3></Link>
					</Button>
				</center>
		</div>
	</div> 
);

export default Home;
