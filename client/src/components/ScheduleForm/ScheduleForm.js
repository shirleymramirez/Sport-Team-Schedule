import React, { Component } from "react";
import { Link } from "react-router-dom";
import ViewSchedule from "./../../components/ViewSchedule";
import "./ScheduleForm.css";
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { TextField, TextFieldIcon, TextFieldHelperText } from 'rmwc/TextField';
import * as scheduleActionCreators from "./../../pages/Schedule/scheduleActionCreators";
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

class ScheduleForm extends Component {
	state={
		place:'',	      
		date:'',
		time:'',
		snack:''
	};

	change = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state);
		this.setState({
			place:'',	      
			date:'',
			time:'',
			snack:''
		});
    
	};

			render(){
		return <div className="container">
        <div className="col-lg-3" />
        <div className="col-lg-6">
          <div class="panel panel-default">
            <div className="panel-body">
              <h3 className="text-center">Add a Schedule</h3>
              <form className="text-center">
                <center><div className="input-group">
                  <label>Place:</label>
                  <input type="text" placeholder="Place" value={this.state.place} name="place" onChange={e => this.change(e)} />
                </div>
                <br />
                <div className="input-group">
                  <label>Date:</label>
                  <input type="text" placeholder="MM/DD/YYYY" value={this.state.date} onChange={e => this.change(e)} name="date" />
                </div>
                <br />
                <div className="input-group">
                  <label>Time:</label>
                  <input type="text" placeholder="10:00 AM" value={this.state.time} onChange={e => this.change(e)} name="time" />
                </div>
                <br />
                <div className="input-group">
                  <label>Snack:</label>
                  <input type="text" placeholder="Snack" value={this.state.snack} onChange={e => this.change(e)} name="snack" />
                </div>
                {/* <div className="input-group">
                  <label>Confirm Password:</label>
                  <input type="password" placeholder="Confirm Password" value={this.state.Password2} onChange={e => this.change(e)} name="Password2" />
                </div>
                <br /> */}
                <div className="input-group">
                  <button onClick={e => this.onSubmit(e)}>
                    <Link to="/parent">
                      Submit
                    </Link>
                  </button>
                </div>
                </center>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-3" />
      </div>;}
}
export default ScheduleForm;