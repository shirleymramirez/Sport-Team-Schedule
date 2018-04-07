import React from "react";
import './roster.css';
import { Grid, GridCell } from 'rmwc/Grid';
import { Typography } from 'rmwc/Typography';
import { Button, ButtonIcon } from 'rmwc/Button';
import { TextField, TextFieldIcon, TextFieldHelperText } from 'rmwc/TextField';
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardMediaContent,
  CardAction,
  CardActionIcons,
  CardActions
} from 'rmwc/Card';

const Roster = () => (
<div> 
	<Grid>

	  <GridCell span="4">
			<center>
				<div> <TextField className='playerName' label="Player's Name" /></div>
				<div><TextField className='teamName' label="Assigned Team" /></div>
				 <div><Button stroked className="submitBtn" >Add to the Roster</Button></div>
			</center>
	  </GridCell>

	<GridCell span="4" className="rosterForm">
		<Card style={{width: '30rem'}} className="rosterView">
  		<CardPrimaryAction>
    	<CardMedia square style={{backgroundImage: 'url()'}}>
      	<CardMediaContent>
        	<Typography
	          use="subheading2"
	          tag="div"
	          theme="text-primary-on-dark"
	          style={{
	            padding: '0.5rem 1rem',
	            backgroundImage: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 100%)',
	            backgroundColor: 'red',
	            bottom: '0',
	            left: '0',
	            right: '0',
	          }}
       		 >
          		<center><h1>Current Roster </h1></center>
        	</Typography>
      	</CardMediaContent>
    	</CardMedia>
  		</CardPrimaryAction>
		</Card>
	</GridCell>

	<GridCell span="4"></GridCell>
	</Grid>
</div>
)
export default Roster;


