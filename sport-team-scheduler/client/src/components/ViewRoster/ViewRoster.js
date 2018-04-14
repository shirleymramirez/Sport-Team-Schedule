import React from "react";
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



const ViewRoster = () => (

	<form>

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

 	</form>
  
     
    );


export default ViewRoster;