// import React from "react";
import ViewSchedule from "./../../components/ViewSchedule";
// allows for text input use 
import React, {Component} from "react";
import scheduleAPI from "../../utils/scheduleApi";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
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

class Schedule extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: "",
			place: "",
			time: "",
			snack: ""

		};
		this.dateChangehandler = this.dateChangehandler.bind(this);
		this.placeChangehandler = this.placeChangehandler.bind(this);
		this.timeChangehandler = this.timeChangehandler.bind(this);
		this.snackChangehandler = this.snackChangehandler.bind(this);
		this.onClickHandler = this.onClickHandler.bind(this);
	}

	onClickHandler(e) {
		scheduleAPI.schedule({
			date: this.state.date,
			place: this.state.place,
			time: this.state.time,
			snack: this.state.snack
		});
		// .then(response => {
			// this.props.actions.updateSchedule(response)
		// })
	};

	dateChangehandler(e){
		this.setState({ date: e.target.value});
	}

	placeChangehandler(e){
		this.setState({place: e.target.value});
	}

	timeChangehandler(e){
		this.setState({time: e.target.value});
	}

	snackChangehandler(e){
		this.setState({snack: e.target.value})
	};

render() {
	return (

// const Schedule = () =>(
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
	        style={{marginTop: '-1rem'}}
	      > <center>
			<TextField 
				label="location" 
				value={this.state.place}
				onchange={this.placeChangehandler}
			/> <div> </div>
			<TextField 
				label="Date"
				value={this.state.date}
				onchange={this.dateChangehandler}
				/> <div> </div>
			<TextField 
				label="Time"
				value={this.state.time}
				onchange={this.timeChangehandler}
				/> <div> </div>
			<TextField 
				label="Assigned Snack"
				value={this.state.snack}
				onchange={this.snackChangehandler}
				/> 
			<div className="submit">
				<button className="btn" onClick={this.onClickHandler}>Submit</button>
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

 <GridCell span="4"></GridCell>
</Grid>
<br />

<ViewSchedule />
</div>

);
}
}

export default Schedule;