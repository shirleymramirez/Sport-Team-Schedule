import React, { Component } from "react";
import ViewSchedule from "./../../components/ViewSchedule";
// allows for text input use 
import ScheduleAPI from "../../utils/scheduleApi";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { TextField } from 'rmwc/TextField';
// allows for card use 
import {
  Card,
  CardPrimaryAction,
  CardActions,
} from 'rmwc/Card';
import { Typography } from 'rmwc/Typography';
import { Grid, GridCell } from 'rmwc/Grid';

class SchedulePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      place: "",
      time: "",
      snack: "",
      schedule: []
    };

    this.dateChangehandler = this.dateChangehandler.bind(this);
    this.placeChangehandler = this.placeChangehandler.bind(this);
    this.timeChangehandler = this.timeChangehandler.bind(this);
    this.snackChangehandler = this.snackChangehandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.loadSchedule = this.loadSchedule.bind(this);
  }

  componentDidMount() {
    this.loadSchedule();
  }

  loadSchedule = () => {
    ScheduleAPI.getSchedules()
      .then(res => this.setState({ schedule: res.data }))
      .catch(err => console.log(err));
  };

  onClickHandler(e) {
    e.preventDefault();
    console.log(this.state);
    ScheduleAPI.schedule({
      date: this.state.date,
      place: this.state.place,
      time: this.state.time,
      snack: this.state.snack
    }).then(res =>
      this.setState({ schedule: [...this.state.schedule, res.data] })
    );
    // clears input
    this.setState({ date: "", place: "", time: "", snack: "" });
  }

  dateChangehandler(e) {
    this.setState({ date: e.target.value });
  }

  placeChangehandler(e) {
    this.setState({ place: e.target.value });
  }

  timeChangehandler(e) {
    this.setState({ time: e.target.value });
  }

  snackChangehandler(e) {
    this.setState({ snack: e.target.value });
  }

  render() {
    return (
      <div>
        <Grid>
          <GridCell span="4" />
          <GridCell span="4">
            <center>
              <Card style={{ width: "21rem" }}>
                <CardPrimaryAction>
                  <div style={{ padding: "0 1rem 1rem 1rem" }}>
                    <Typography use="title" tag="h2">
                      <center>Add to Schedule</center>
                    </Typography>
                    <Typography
                      use="subheading1"
                      tag="h3"
                      theme="text-secondary-on-background"
                      style={{ marginTop: "-1rem" }}
                    >
                      <center>
                        <TextField
                          label="place"
                          value={this.state.place}
                          onChange={this.placeChangehandler}
                        />
                        <div />
                        <TextField
                          label="Date"
                          value={this.state.date}
                          onChange={this.dateChangehandler}
                        />
                        <div />
                        <TextField
                          label="Time"
                          value={this.state.time}
                          onChange={this.timeChangehandler}
                        />
                        <div />
                        <TextField
                          label="Assigned Snack"
                          value={this.state.snack}
                          onChange={this.snackChangehandler}
                        />
                        <div className="submit">
                          <button className="btn" onClick={this.onClickHandler}>
                            Submit
                          </button>
                        </div>
                      </center>
                    </Typography>
                  </div>
                </CardPrimaryAction>
                <CardActions />
              </Card>
            </center>
          </GridCell>
          <GridCell span="4">
          </GridCell>
        </Grid>
        <br />
        <ViewSchedule />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  };
};
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(dispatch) };
};
// export default Schedule; 
export default connect(mapStateToProps, mapDispatchToProps)(SchedulePage);