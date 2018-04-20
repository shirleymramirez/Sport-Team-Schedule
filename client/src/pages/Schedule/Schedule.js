// import React from "react";
import ViewSchedule from "./../../components/ViewSchedule";
import React from "react";
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


