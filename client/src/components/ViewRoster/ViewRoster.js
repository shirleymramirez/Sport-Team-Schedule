import React from "react";
import { SimpleListItem } from "rmwc/List";

const ViewRoster = props =>
  <form>
    <center>
      <h1>Roster </h1>
    </center>
    <div className="panel-body">
      <table className="table table-hover" id="">
        <thead>
          <tr>
            <th>
              <center>Player's Name</center>
            </th>
            <th>
              <center>Player's Age</center>
            </th>
            <th>
              <center>Team</center>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {props.players.length > 0 && props.players.map(player =>
                  <SimpleListItem key={player.id} text={player.name} /> )}
            </td>
            <td>
              {props.players.length > 0 && props.players.map(player =>
                  <SimpleListItem key={player.id} text={player.age} /> )}
            </td>
            <td>
              {props.players.length > 0 && props.players.map(player =>
                  <SimpleListItem key={player.id} text={player.team} /> )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </form>;

export default ViewRoster;
