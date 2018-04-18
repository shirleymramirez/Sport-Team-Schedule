// import React from "react";
import ViewSchedule from "./../../components/ViewSchedule";
// allows for text input use 
import React, {Component} from "react";
import ScheduleForm from "./../../components/ScheduleForm";
import ScheduleAPI from "../../utils/scheduleApi";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { TextField, TextFieldIcon, TextFieldHelperText } from 'rmwc/TextField';
// import * as scheduleActionCreators from "./scheduleActionCreators";
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

class SchedulePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// date: "",
			// place: "",
			// time: "",
			// snack: ""
			schedule: {}
		};

		this.scheduleChangehandler = this.scheduleChangehandler.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		// this.dateChangehandler = this.dateChangehandler.bind(this);
		// this.placeChangehandler = this.placeChangehandler.bind(this);
		// this.timeChangehandler = this.timeChangehandler.bind(this);
		// this.snackChangehandler = this.snackChangehandler.bind(this);
		// this.onClickHandler = this.onClickHandler.bind(this);
	}

	onSubmit = fields => {
    ScheduleAPI.schedule(fields)
      .then(response => {
      this.props.actions.updateSchedule(response.data);
    });
  };

  scheduleChangehandler(e) {
    this.setState({ place: e.target.value });
  }

    render() {
    return (
      <div>
        <ScheduleForm onSubmit={fields => this.onSubmit(fields)} />
      </div>
    );
  }
};

	// onClickHandler(e) {
	// 	scheduleAPI.schedule({
	// 		date: this.state.date,
	// 		place: this.state.place,
	// 		time: this.state.time,
	// 		snack: this.state.snack
	// 	});
	// 	// .then(response => {
	// 		// this.props.actions.updateSchedule(response)
	// 	// })
	// };

	// dateChangehandler(e){
	// 	this.setState({ date: e.target.value});
	// }

	// placeChangehandler(e){
	// 	this.setState({place: e.target.value});
	// }

	// timeChangehandler(e){
	// 	this.setState({time: e.target.value});
	// }

	// snackChangehandler(e){
	// 	this.setState({snack: e.target.value})
	// };



const mapStateToProps = (state, ownProps) => {
  return {
  };
};
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(dispatch) };
};
// export default Schedule; 
export default connect(mapStateToProps, mapDispatchToProps)(SchedulePage);