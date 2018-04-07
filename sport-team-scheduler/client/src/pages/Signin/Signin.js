import React from "react";
// allows for text input use 
import { TextField, TextFieldIcon, TextFieldHelperText } from 'rmwc/TextField';
// allows for card use 
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardAction,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from 'rmwc/Card';
import { Typography } from 'rmwc/Typography';
import { Grid, GridCell } from 'rmwc/Grid';


const Signin = () =>(
<div>
<Grid>
 <GridCell span="4"></GridCell>
 <GridCell span="4">
	<Card style={{width: '21rem'}}>
	  <CardPrimaryAction>
	    <CardMedia sixteenByNine style={{backgroundImage: 'url(https://material-components-web.appspot.com/images/16-9.jpg)'}}/>
	    <div style={{padding: '0 1rem 1rem 1rem'}}>
	      <Typography use="title" tag="h2">Sign Up</Typography>
	      <Typography
	        use="subheading1"
	        tag="h3"
	        theme="text-secondary-on-background"
	        style={{marginTop: '-1rem'}}
	      >
			<TextField label="Your Name" />
			<TextField label="Your Child's Name"/>
			<TextField label="Phone Number"/>
			<TextField label="Email"/>
			<TextField label="Password"/>
	      </Typography>
	    </div>
	  </CardPrimaryAction>
	  <CardActions>
	    <CardActionButtons>
	      	<CardAction>Sign Up</CardAction>
	    </CardActionButtons>
	  </CardActions>
	</Card>
 </GridCell>
 <GridCell span="4"></GridCell>
</Grid>
<br />
</div>

);

export default Signin;