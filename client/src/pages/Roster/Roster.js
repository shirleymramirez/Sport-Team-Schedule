import React from "react";
import './roster.css';
import ViewRoster from "./../../components/ViewRoster";
import { Grid, GridCell } from 'rmwc/Grid';

const Roster = () => (
	<div> 
		<Grid>
	  		<GridCell span="4"></GridCell>
			<GridCell span="4">
				<ViewRoster />
			</GridCell>
			<GridCell span="4"></GridCell>
		</Grid>
	</div>
);
export default Roster;