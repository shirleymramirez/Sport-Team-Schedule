import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as scheduleActionCreators from "./../../pages/Schedule/scheduleActionCreators";
import ScheduleAPI from "../../utils/scheduleApi";


class ViewSchedule extends Component {
    state ={
      Schedules: []

    };

    componentDidMount() {
      this.loadSchedule();
    }


    loadSchedule = () => {
      ScheduleAPI.getSchedules()
        .then(res => this.setState({ Schedules: res.data}))
        .catch(err => console.log(err));
        console.log(this.state.Schedules);
    };

  render(){
    return(

  <form>

  <center><h1>Team Schedule </h1></center>
          <div class="panel-body">
            <table class="table table-hover" id='trainTable'>
              <thead>
                <tr>
                  <th><center>Location</center></th>
                  <th><center>Date</center></th>
                  <th><center>Time</center></th>
                  <th><center>Assigned Snack</center></th>
                </tr>
              </thead>
              <tbody>
                
              </tbody>
            </table>
          </div>

 	</form>
)};
};

const mapStateToProps = (state, ownProps) => {
  return {


  };
};
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(scheduleActionCreators, dispatch) };
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewSchedule);
// export default ViewSchedule;