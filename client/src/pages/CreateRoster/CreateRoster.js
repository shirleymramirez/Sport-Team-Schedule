import React from "react";
import ViewRoster from "./../../components/ViewRoster";
import { Grid, GridCell } from 'rmwc/Grid';
import { Typography } from 'rmwc/Typography';
import { TextField,  } from 'rmwc/TextField';
// allows for text input use 
// allows for card use 

import {
  Card,
  CardPrimaryAction,
  CardActions,
} from 'rmwc/Card';


const CreateRoster = () => (
	<div> 
		<Grid>

			  <GridCell span="6">
				<center>
				<Card style={{width: '40rem'}}>
				  <CardPrimaryAction>
				    <div style={{padding: '0 1rem 1rem 1rem'}}>
				      <Typography use="title"><center><h3>Add to Roster</h3></center></Typography>
				      <Typography
				        use="subheading1"
				        tag="h3"
				        theme="text-secondary-on-background"
				        style={{marginTop: '-1rem'}}
				      > <center>
						<h5><TextField label="Player's Name"/></h5> <div> </div>
						<h5><TextField label="Player's Age"/></h5> <div> </div>
						<h5><TextField label="Team" /> </h5><div> </div>
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
			<GridCell span="6"> <ViewRoster /></GridCell>
		</Grid>
	</div>
);

export default CreateRoster;
