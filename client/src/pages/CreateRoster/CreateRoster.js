import React, { Component } from "react";
import ViewRoster from "./../../components/ViewRoster";
import RosterAPI from "../../utils/rosterApi";
import { Grid, GridCell } from 'rmwc/Grid';
import { Typography } from 'rmwc/Typography';
import { TextField } from 'rmwc/TextField';

// allows for card use 
import {
  Card,
  CardPrimaryAction,
  CardActions,
} from 'rmwc/Card';


class CreateRoster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      // name2:"",
      age: "",
      team: "",
      players: [],
    };
    this.NameChangehandler = this.NameChangehandler.bind(this);
    // this.Name2Changehandler = this.Name2Changehandler.bind(this);
    this.AgeChangehandler = this.AgeChangehandler.bind(this);
    this.TeamChangehandler = this.TeamChangehandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    // this.onDeleteHandler = this.onDeleteHandler.bind(this);  
    this.loadPlayer = this.loadPlayer.bind(this);
  }

  componentDidMount() {
    this.loadPlayer();
  }

  loadPlayer = () => {
    RosterAPI.getAll()
      .then(res =>
        this.setState({
          players: res.data
        })
      )
      .catch(err => console.log(err));
  };

  onClickHandler(e) {
    e.preventDefault();
    console.log(this.state);
    RosterAPI.Add({
      name: this.state.name,
      age: this.state.age,
      team: this.state.team
    })
    .then(res =>
      this.setState({ players: [...this.state.players, res.data] })
    )
    // clears input
    this.setState({
      name: "",
      age: "",
      team: ""
    });
  }

  // onDeleteHandler(e){
  //   e.preventDefault();
  //   console.log(this.state);
  //   RosterAPI.Remove({
  //     name: this.state.name2
  //   })
  //   // clear
  //   this.setState({
  //     name2: ""
  //   });
  // };

  NameChangehandler(e) {
    this.setState({ name: e.target.value });
  }
  // Name2Changehandler(e) {
  //   this.setState({ name2: e.target.value });
  // }
  AgeChangehandler(e) {
    this.setState({ age: e.target.value });
  }
  TeamChangehandler(e) {
    this.setState({ team: e.target.value });
  }
  render() {
    return (
      <div>
        <Grid>
          <GridCell span="6">
            <center>
              <Card style={{ width: "21rem" }}>
                <CardPrimaryAction>
                  <div style={{ padding: "0 1rem 1rem 1rem" }}>
                    <Typography use="title" tag="h2">
                      <center>Add to Roster</center>
                    </Typography>
                    <Typography
                      use="subheading1"
                      tag="h3"
                      theme="text-secondary-on-background"
                      style={{ marginTop: "-1rem" }}
                    >
                      <center>
                        <TextField
                          label="Player's Name"
                          value={this.state.name}
                          onChange={this.NameChangehandler}
                        />
                        <div> </div>
                        <TextField
                          label="Player's Age"
                          value={this.state.age}
                          onChange={this.AgeChangehandler}
                        />
                        <div> </div>
                        <TextField
                          label="Team"
                          value={this.state.team}
                          onChange={this.TeamChangehandler}
                        />
                        <div> </div>
                        <div className="submit">
                          <button
                            className="btn"
                            onClick={this.onClickHandler}>
                            Submit
                          </button>
                        </div>
                      </center>
                    </Typography>
                  </div>
                </CardPrimaryAction>
                <CardActions />
              </Card>
              <br />
              <Card style={{ width: "21rem" }}>
                <CardPrimaryAction>
                  <div style={{ padding: "0 1rem 1rem 1rem" }}>
                    <Typography use="title" tag="h2">
                      <center>Delete From Roster</center>
                    </Typography>
                    <Typography
                      use="subheading1"
                      tag="h3"
                      theme="text-secondary-on-background"
                      style={{ marginTop: "-1rem" }}
                    >
                      <center>
                        <TextField
                          label="Player's Name"
                          value={this.state.name2}
                          onChange={this.Name2Changehandler}
                        />
                        <div> </div>
                        <div className="Delete">
                          <button
                            className="btn"
                            onClick={this.onDeleteHandler}
                            >
                            Delete
                          </button>
                        </div>
                      </center>
                    </Typography>
                  </div>
                </CardPrimaryAction>
                <CardActions />
              </Card>              
            </center>
          </GridCell>
          <GridCell span="6">
            <ViewRoster players={this.state.players} />
          </GridCell>
        </Grid>
      </div>
    );
  }
};
export default CreateRoster;

