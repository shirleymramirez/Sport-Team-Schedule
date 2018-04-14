import React from "react";
import ViewSchedule from "./../../components/ViewSchedule";
// allows for text input use 
import { TextField, TextFieldIcon, TextFieldHelperText } from 'rmwc/TextField';
// allows for card use 
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardAction,
  CardMediaContent,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from 'rmwc/Card';
import { Typography } from 'rmwc/Typography';
import { Grid, GridCell } from 'rmwc/Grid';


const Schedule = () =>(
<div>
<Grid>
 <GridCell span="4">
 </GridCell>

 <GridCell span="4">
 	<Card style={{width: '21rem'}}>
	  <CardPrimaryAction>
	    <div style={{padding: '0 1rem 1rem 1rem'}}>
	      <Typography use="title" tag="h2"><center>Add to Schedule</center></Typography>
	      <Typography
	        use="subheading1"
	        tag="h3"
	        theme="text-secondary-on-background"
	        style={{marginTop: '-1rem'}}
	      > <center>
			<TextField label="location" /> <div> </div>
			<TextField label="Date"/> <div> </div>
			<TextField label="Time"/> <div> </div>
			<TextField label="Assigned Snack"/> 
			</center>
	      </Typography>
	    </div>
	  </CardPrimaryAction>
	  <CardActions>
	  </CardActions>
	</Card>
 </GridCell>
 	<ViewSchedule />
 <GridCell span="4"></GridCell>
</Grid>
<br />
</div>

);

export default Schedule;