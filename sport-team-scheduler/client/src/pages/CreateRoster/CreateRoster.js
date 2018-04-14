import React from "react";
import ViewRoster from "./../../components/ViewRoster";
import { Grid, GridCell } from 'rmwc/Grid';
import { Typography } from 'rmwc/Typography';
import { Button, ButtonIcon } from 'rmwc/Button';
import { TextField, TextFieldIcon, TextFieldHelperText } from 'rmwc/TextField';
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

const CreateRoster = () => (
<div> 
	<Grid>

	  <GridCell span="6">
		<center>
		<Card style={{width: '21rem'}}>
		  <CardPrimaryAction>
		    <div style={{padding: '0 1rem 1rem 1rem'}}>
		      <Typography use="title" tag="h2"><center>Add to Roster</center></Typography>
		      <Typography
		        use="subheading1"
		        tag="h3"
		        theme="text-secondary-on-background"
		        style={{marginTop: '-1rem'}}
		      > <center>
				<TextField label="Player's Name"/> <div> </div>
				<TextField label="Player's Age"/> <div> </div>
				<TextField label="Team" /> <div> </div>
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
)
export default CreateRoster;