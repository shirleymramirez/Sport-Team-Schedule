// import React from "react";
import ViewSchedule from "./../../components/ViewSchedule";
<<<<<<< HEAD
import React, { Component } from "react";
import ScheduleForm from "./../../components/ScheduleForm";
import ScheduleAPI from "../../utils/scheduleApi";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as scheduleActionCreators from "./scheduleActionCreators";
=======

>>>>>>> aaff523b81a32078c8483514e1218070e171428c
// allows for text input use 
// allows for card use 

const Schedule = () =>(
  <div>
    <center>
      <ViewSchedule />
    </center>
  </div>
);

export default Schedule;

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


