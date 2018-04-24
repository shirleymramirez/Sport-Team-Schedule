import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TextField } from "rmwc/TextField";
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardAction,
  CardActions,
  CardActionButtons
} from "rmwc/Card";
import { Typography } from "rmwc/Typography";
import { Grid, GridCell } from "rmwc/Grid";
import "./ParentSignupForm.css";

class ParentSignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      kidsname: "",
      phonenumber: "",
      email: "",
      password: ""
    };
    this.usernameChangehandler = this.usernameChangehandler.bind(this);
    this.nameChangehandler = this.nameChangehandler.bind(this);
    this.kidsnameChangehandler = this.kidsnameChangehandler.bind(this);
    this.phonenumberChangehandler = this.phonenumberChangehandler.bind(this);
    this.emailChangehandler = this.emailChangehandler.bind(this);
    this.passwordChangehandler = this.passwordChangehandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      username: "",
      name: "",
      kidsname: "",
      phonenumber: "",
      email: "",
    password: ""
    });
  }

  usernameChangehandler(e) {
    this.setState({ username: e.target.value });
  }
  nameChangehandler(e) {
    this.setState({ name: e.target.value });
  }
  kidsnameChangehandler(e) {
    this.setState({ kidsname: e.target.value });
  }
  phonenumberChangehandler(e) {
    this.setState({ phonenumber: e.target.value });
  }
  emailChangehandler(e) {
    this.setState({ email: e.target.value });
  }
  passwordChangehandler(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return <div>
        <Grid>
          <GridCell span="4" />
          <GridCell span="4">
            <center>
              <Card className="sigUpCard">
                <CardPrimaryAction>
                  <CardMedia sixteenByNine style={{ backgroundImage: "url(https://m.media-amazon.com/images/S/aplus-media/vc/7895a621-9359-412d-92d2-94c15adc4c70._SL300__.jpg)" }} />
                  <div style={{ padding: "0 1rem 1rem 1rem" }}>
                    <Typography use="title">
                      <h3>Sign Up Here</h3>
                    </Typography>
                    <Typography use="subheading1" theme="text-secondary-on-background" style={{ marginTop: "-1rem" }}>
                      <h5 className="signupFormInput">
                        <TextField label="Username" value={this.state.username} onChange={this.usernameChangehandler} />
                      </h5>
                    </Typography>
                    <Typography use="body1" tag="div" theme="text-secondary-on-background">
                      <h5 className="signupFormInput">
                        <TextField label="Fullname" value={this.state.name} onChange={this.nameChangehandler} />
                      </h5>
                    </Typography>
                    <Typography use="body1" tag="div" theme="text-secondary-on-background">
                      <h5 className="signupFormInput">
                        <TextField label="Kidsname" value={this.state.Kidsname} onChange={this.kidsnameChangehandler} />
                      </h5>
                    </Typography>
                    <Typography use="body1" tag="div" theme="text-secondary-on-background">
                      <h5 className="signupFormInput">
                        <TextField label="email" value={this.state.email} onChange={this.emailChangehandler} />
                      </h5>
                    </Typography>
                    <Typography use="body1" tag="div" theme="text-secondary-on-background">
                      <h5 className="signupFormInput">
                        <TextField label="Phonenumber" value={this.state.number} onChange={this.phonenumberChangehandler} />
                      </h5>
                    </Typography>
                    <Typography use="body1" tag="div" theme="text-secondary-on-background">
                      <h5 className="signupFormInput">
                        <TextField label="password" value={this.state.password} onChange={this.passwordChangehandler} type="password" />
                      </h5>
                    </Typography>
                  </div>
                </CardPrimaryAction>
                <CardActions>
                  <CardActionButtons>
                    <CardAction onClick={this.onClickHandler}>
                      <Link to="/parent">
                        <h4>Sign Up</h4>
                      </Link>
                    </CardAction>
                  </CardActionButtons>
                </CardActions>
              </Card>
            </center>
          </GridCell>
          <GridCell span="4" />
        </Grid>
      </div>;
  }
}
export default ParentSignupForm;