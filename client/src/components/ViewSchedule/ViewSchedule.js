// import React, {Component} from "react";
// import { connect } from 'react-redux';
// import { bindActionCreators } from "redux";
// import * as scheduleActionCreators from "./../../pages/Schedule/scheduleActionCreators";
// import ScheduleAPI from "../../utils/scheduleApi";


// class ViewSchedule extends Component {
//     state ={
//       Schedules: []

//     };

//     componentDidMount() {
//       this.loadSchedule();
//     }


//     loadSchedule = () => {
//       ScheduleAPI.getSchedules()
//         .then(res => {
//           return res;
//         }).then(data => {
//           console.log(data)
//         })
//         .then((data) => this.setState({ 
//           Schedules: data
//         }))
//         .catch(err => console.log(err));
//         console.log(this.state.Schedules);
//     };

//   render(){
//     return(

//   <form>

//   <center><h1>Team Schedule </h1></center>
//           <div class="panel-body">
//             <table class="table table-hover" id='trainTable'>
//               <thead>
//                 <tr>
//                   <th><center>Location</center></th>
//                   <th><center>Date</center></th>
//                   <th><center>Time</center></th>
//                   <th><center>Assigned Snack</center></th>
//                 </tr>
//               </thead>
//               <tbody>
                
//               </tbody>
//             </table>
//           </div>

//  	</form>
// )};
// };

// const mapStateToProps = (state, ownProps) => {
//   return {


//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return { actions: bindActionCreators(scheduleActionCreators, dispatch) };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(ViewSchedule);
// export default ViewSchedule;

import React from "react";
import { SimpleListItem } from "rmwc/List";

const ViewSchedule = props => (
  <form>
       <center>
         <h1>Schedule</h1>
       </center>
       <div className="panel-body">
         <table className="table table-hover" id="">
           <thead>
             <tr>
               <th>
                 <center>Place</center>
               </th>
               <th>
                 <center>Date</center>
               </th>
               <th>
                 <center>Time</center>
               </th>
               <th>
                 <center>Snack</center>
               </th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td >
                 {props.schedules.length > 0 && props.schedules.map( schedule =>
                       <SimpleListItem key={schedule.id} text={schedule.place} /> )} 
               </td>
               <td>
                 {props.schedules.length > 0 && props.schedules.map( schedule =>
                       <SimpleListItem key={schedule.id} text={schedule.date} /> )} 
               </td>
               <td>
                 {props.schedules.length > 0 && props.schedules.map( schedule =>
                     <SimpleListItem key={schedule.id} text={schedule.time} /> )} 
               </td>
               <td>
                 {props.schedules.length > 0 && props.schedules.map( schedule =>
                     <SimpleListItem key={schedule.id} text={schedule.snack} /> )} 
               </td>
             </tr>
           </tbody>
         </table>
       </div>
    </form>
)

export default ViewSchedule; 
