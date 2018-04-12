import React from "react";
import ViewSchedule from "./../../components/ViewSchedule";
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
<center>
 	<ViewSchedule />
 </center>

</div>

);

export default Schedule;

