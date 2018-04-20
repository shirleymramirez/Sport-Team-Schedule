// import React from "react";
// import ViewSchedule from "./../../components/ViewSchedule";
// import React from "react";
// allows for text input use 
// allows for card use 

// const Schedule = () =>(
  // <div>
    // <center>
      // <ViewSchedule />
    // </center>
  // </div>
// );

// export default Schedule;

// class SchedulePage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       schedule: {}
//     };

//     this.scheduleChangehandler = this.scheduleChangehandler.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   onSubmit = fields => {
//     ScheduleAPI.schedule(fields)
//       .then(response => {
//       this.props.actions.updateSchedule(response.data);
//     });
//   };

//   scheduleChangehandler(e) {
//     this.setState({ place: e.target.value });
//   }

//   render() {
//     return (
//       <div>
//         <ScheduleForm onSubmit={fields => this.onSubmit(fields)} />
//       </div>
//     );
//   }
// };

// const mapStateToProps = (state, ownProps) => {
//     return {};
//   }

// const mapDispatchToProps = (dispatch) => {
//   return { actions: bindActionCreators(scheduleActionCreators, dispatch) };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(SchedulePage);

import React, {Component}from "react";
import './Schedule.css';
import ViewSchedule from "./../../components/ViewSchedule";
import { Grid, GridCell } from 'rmwc/Grid';
import ScheduleAPI from "../../utils/scheduleApi";

class Schedule extends Component {
    constructor(props) {
    super(props);
    this.state = {
      place: "",
      date: "",
      time: "",
      snack: "",
      schedules: []
    };
    
    this.PlaceChangehandler = this.PlaceChangehandler.bind(this);
    this.DateChangehandler = this.DateChangehandler.bind(this);
    this.TimeChangehandler = this.TimeChangehandler.bind(this);
    this.SnackChangehandler = this.SnackChangehandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.loadSchedule = this.loadSchedule.bind(this);
  }

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
      this.setState({ schedules: [...this.state.schedules, res.scheduleData] })
    )
    // clears input
    this.setState({
      place: "",
      date: "",
      time: "",
      snack: ""
    });
  }

  PlaceChangehandler(e) {
    this.setState({ place: e.target.value });
  }
  DateChangehandler(e) {
    this.setState({ date: e.target.value });
  }
  TimeChangehandler(e) {
    this.setState({ time: e.target.value });
  }
   SnackChangehandler(e) {
    this.setState({ snack: e.target.value });
  }

  render() {
    return <div>
        <Grid>
          <GridCell span="4" />
          <GridCell span="4">
            <ViewSchedule schedules={this.state.schedules} />
          </GridCell>
          <GridCell span="4" />
        </Grid>
      </div>;
    }
};

export default Schedule;
