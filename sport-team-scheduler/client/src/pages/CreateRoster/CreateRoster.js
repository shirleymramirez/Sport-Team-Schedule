import React from "react";
import ViewRoster from "./../../components/ViewRoster";
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

 <GridCell span="6">
 	<center>
 	<Card style={{width: '21rem'}}>
	  <CardPrimaryAction>
	    <div style={{padding: '0 1rem 1rem 1rem'}}>
	      <Typography use="title" tag="h2"><center>Add to the Roster</center></Typography>
	      <Typography
	        use="subheading1"
	        tag="h3"
	        theme="text-secondary-on-background"
	        style={{marginTop: '-1rem'}}
	      > <center>
			<TextField label="Team" /> <div> </div>
			<TextField label="Player's Name"/> <div> </div>
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

 <GridCell span="6">
 	<center>
 		<ViewRoster />
 	</center>
 </GridCell>
</Grid>
<br />

</div>

);

export default Schedule;