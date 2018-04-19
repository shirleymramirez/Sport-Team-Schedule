import React, {Component} from "react";
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
        .then((data) => this.setState({ 
          Players: data
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
  
export default ViewRoster;