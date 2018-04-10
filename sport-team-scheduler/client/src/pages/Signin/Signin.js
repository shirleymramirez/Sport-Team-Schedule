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
	      <form method="post" action="/users/register">
			<TextField label="Custom Useer" name="username" />	      
			<TextField label="Your Name" name="name" />
			<TextField label="Your Child's Name" name="kidsName" />
			<TextField label="Phone Number" name="number" />
			<TextField label="Email" name="email" />
			<TextField label="Password" name="Password" />
			<TextField label="Renter Password" name='Password2' />
		  </form>	
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