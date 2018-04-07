import React from "react";
import { Button, ButtonIcon } from 'rmwc/Button';
import { Grid, GridCell } from 'rmwc/Grid';
import { Typography } from 'rmwc/Typography';
import './Home.css';


const Home = () => 
<div> 
<Typography use="title" tag="h2"><center>I am a...</center></Typography>

	<Grid>
	  <GridCell span="4"></GridCell>
	  <GridCell span="4">
	  <center>
	  	<Button stroked className="btn1" onClick={this.parentSubmit}><h2>Parent</h2></Button>
	  	<Button stroked className="btn2"><h2>Coach</h2></Button>
	  </center>
	  </GridCell>
	  <GridCell span="4"></GridCell>
	</Grid>
</div>;



export default Home;