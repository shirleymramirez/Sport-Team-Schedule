import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as rosterActionCreators from "./rosterActionCreators";
import RosterAPI from "../../utils/rosterApi";


class ViewRoster extends Component {
    state ={
      Players: []

    };

    componentDidMount() {
      this.loadPlayer();
    }


    loadPlayer = () => {
      RosterAPI.getAll()
        .then(res => {
          return res;
          }).then(data => {
            console.log(data)
          })
        .then((Players) => this.setState({ 
          Players: Players
        }))
        .catch(err => console.log(err));
        console.log(this.state.Players);
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
                    <td><center></center></td>
                    <td><center></center></td>
                    <td><center></center></td>
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