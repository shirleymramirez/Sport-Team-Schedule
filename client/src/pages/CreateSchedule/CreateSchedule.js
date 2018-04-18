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
					<Card style={{width: '21rem'}}>
						<CardPrimaryAction>
							<div style={{padding: '0 1rem 1rem 1rem'}}>
								<Typography use="title" tag="h2"><center>Add to Schedule</center></Typography>
								<Typography
									use="subheading1"
									tag="h3"
									theme="text-secondary-on-background"
									style={{marginTop: '-1rem'}}> 
									<center>
										<TextField label="location" /> 
											<div></div>
										<TextField label="Date" /> 
											<div></div>
										<TextField label="Time" /> 
											<div></div>
										<TextField label="Assigned Snack" /> 
											<div className="submit">
												<button className="btn">Submit</button>
											</div>	
									</center>
								</Typography>
							</div>
						</CardPrimaryAction>
						<CardActions></CardActions>
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