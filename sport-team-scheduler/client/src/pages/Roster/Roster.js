import React from "react";
import './roster.css';
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
)
export default Roster;