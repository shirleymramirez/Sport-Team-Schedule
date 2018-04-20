// import React from "react";
import ViewSchedule from "./../../components/ViewSchedule";
// allows for text input use 
import React, {Component} from "react";
import ScheduleAPI from "../../utils/scheduleApi";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { TextField } from 'rmwc/TextField';
// import * as scheduleActionCreators from "./scheduleActionCreators";
// allows for card use 
import {
  Card,
  CardPrimaryAction,
  CardActions,
} from 'rmwc/Card';
import { Typography } from 'rmwc/Typography';
import { Grid, GridCell } from 'rmwc/Grid';

class CreateSchedule extends Component {
	constructor(props) {
		super(props);
		this.state = {
			place: "",
			date: "",
			time: "",
			snack: "",
			schedules: []
			// schedule: {}
		};

		// this.scheduleChangehandler = this.scheduleChangehandler.bind(this);
		// this.onSubmit = this.onSubmit.bind(this);
		this.PlaceChangehandler = this.PlaceChangehandler.bind(this);
		this.DateChangehandler = this.DateChangehandler.bind(this);
		this.TimeChangehandler = this.TimeChangehandler.bind(this);
		this.SnackChangehandler = this.SnackChangehandler.bind(this);
		this.onClickHandler = this.onClickHandler.bind(this);
		this.loadSchedule = this.loadSchedule.bind(this);
	}

	// onSubmit = fields => {
 //    ScheduleAPI.schedule(fields)
 //      .then(response => {
 //      this.props.actions.updateSchedule(response.data);
 //    });
 //  };

 //  scheduleChangehandler(e) {
 //    this.setState({ place: e.target.value });
 //  }
 	componentDidMount() {
 		this.loadSchedule();
 	}

 	loadSchedule = () => {
 		ScheduleAPI.getSchedules()
 		.then(res =>
 			this.setState({
 				schedules: res.scheduleData
 			})
 		)
 		.catch(err => console.log(err));
 	};

	onClickHandler(e) {
		e.preventDefault();
		console.log(this.state);
		ScheduleAPI.saveSchedules({
			place: this.state.place,
			date: this.state.date,
			time: this.state.time,
			snack: this.state.snack
		})
		.then(res =>
			this.setState({schedules: [...this.state.schedules, res.scheduleData]})
		)

		   this.setState({
            place:'',
            date:'',
            time:'',
            snack: ''
        });
		// .then(response => {
			// this.props.actions.updateSchedule(response)
		// })
	};

	PlaceChangehandler(e){
		this.setState({ place: e.target.value});
	}

	DateChangehandler(e){
		this.setState({date: e.target.value});
	}

	TimeChangehandler(e){
		this.setState({time: e.target.value});
	}

	SnackChangehandler(e){
		this.setState({snack: e.target.value})
	};

  render() {
    return (
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
										<TextField 
										label="Place" 
										value={this.state.place}
                      					onChange={this.PlaceChangehandler}/> 
											<div></div>
										<TextField 
										label="Date" 
										value={this.state.date}
                      					onChange={this.DateChangehandler}/> 
											<div></div>
										<TextField 
										label="Time" 
										value={this.state.time}
                      					onChange={this.TimeChangehandler}/> 
											<div></div>
										<TextField 
										label="Assigned Snack" 
										value={this.state.snack}
                      					onChange={this.SnackChangehandler}/> 
											<div className="submit">
												<button className="btn" onClick={this.onClickHandler}>Submit</button>
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
		<ViewSchedule schedules={this.state.schedules} />
	</div>

);
}
};

export default CreateSchedule

// const mapStateToProps = (state, ownProps) => {
//   return {
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return { actions: bindActionCreators(dispatch) };
// };
// // export default Schedule; 
// export default connect(mapStateToProps, mapDispatchToProps)(SchedulePage);