import React, { Component } from "react";
import RosterAPI from "../../utils/rosterApi";


class Delete extends Component {

  DeleteHandler(){
    RosterAPI.Remove()


  }

	render(){
		return (
          <input 
          id="edit1" 
          type="submit" 
          name="edit" 
          value="Edit" 
          />
      )}
}
export default Delete;