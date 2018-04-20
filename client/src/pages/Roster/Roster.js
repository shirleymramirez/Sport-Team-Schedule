import React, {Component}from "react";
import './roster.css';
import ViewRoster from "./../../components/ViewRoster";
import { Grid, GridCell } from 'rmwc/Grid';
import RosterAPI from "../../utils/rosterApi";


class Roster extends Component {
	  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      team: "",
      players: [],
		};
		
		this.NameChangehandler = this.NameChangehandler.bind(this);
    this.AgeChangehandler = this.AgeChangehandler.bind(this);
    this.TeamChangehandler = this.TeamChangehandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
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
      team: "",
    });
  }

  NameChangehandler(e) {
    this.setState({ name: e.target.value });
  }
  AgeChangehandler(e) {
    this.setState({ age: e.target.value });
  }
  TeamChangehandler(e) {
    this.setState({ team: e.target.value });
  }

	render() {
		return <div>
        <Grid>
          <GridCell span="4" />
          <GridCell span="4">
            <ViewRoster players={this.state.players}/>
          </GridCell>
          <GridCell span="4" />
        </Grid>
      </div>;
		}
};

export default Roster;