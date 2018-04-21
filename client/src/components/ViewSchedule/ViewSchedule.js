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
