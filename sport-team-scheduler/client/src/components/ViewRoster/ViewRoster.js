import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as rosterActionCreators from "./rosterActionCreators";
import RosterAPI from "../../utils/rosterApi";


class ViewRoster extends Component {
    state ={
      Players: []

    };


  render(){
    return(
    <form>
    <center><h1>Roster </h1></center>
            <div className="panel-body">
              <table className="table table-hover" id=''>
                <thead>
                  <tr>
                    <th><center>Player's Name</center></th>
                    <th><center>Player's Age</center></th>
                    <th><center>Team</center></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><center>Dawson Duncan</center></td>
                    <td><center>100</center></td>
                    <td><center>racecars</center></td>
                  </tr>
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
  return { actions: bindActionCreators(rosterActionCreators, dispatch) };
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewRoster);