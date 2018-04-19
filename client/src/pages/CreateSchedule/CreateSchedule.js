import React from "react";
import ViewSchedule from "./../../components/ViewSchedule";
// allows for text input use 
import { TextField } from 'rmwc/TextField';
// allows for card use 
import {
  Card,
  CardPrimaryAction,
  CardActions,
} from 'rmwc/Card';
import { Typography } from 'rmwc/Typography';
import { Grid, GridCell } from 'rmwc/Grid';


const Schedule = () =>(
<div>
<Grid>
 <GridCell span="4"></GridCell>

 <GridCell span="4">
 	<center>
 	<Card style={{width: '50rem'}}>
	  <CardPrimaryAction>
	    <div style={{padding: '0 1rem 1rem 1rem'}}>
	      <Typography use="title" tag="h2"><center><h3>Add to Schedule</h3></center></Typography>
	      <Typography
	        use="subheading1"
	        tag="h3"
	        theme="text-secondary-on-background"
	        style={{marginTop: '-1rem'}}
	      > <center>
			<h5><TextField label="Location" /></h5> <div> </div>
			<h5><TextField label="Date"/></h5> <div> </div>
			<h5><TextField label="Time"/></h5> <div> </div>
			<h5><TextField label="Assigned Snack"/></h5>
			<div className="submit">
				<button className="btn" >Submit</button>
			</div>	
			</center>
	      </Typography>
	    </div>
	  </CardPrimaryAction>
	  <CardActions>
	  </CardActions>
	</Card>
	</center>
 </GridCell>

 <GridCell span="4"></GridCell>
</Grid>
<br />

<ViewSchedule />
</div>

);

export default Schedule;