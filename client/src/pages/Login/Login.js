import React, {Component} from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import UserAPI from "../../utils/userApi";
import { bindActionCreators } from "redux";
// allows for text input use 
import { TextField } from 'rmwc/TextField';
// allows for card use 
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardAction,
  CardActions,
  CardActionButtons
} from 'rmwc/Card';
import { Typography } from 'rmwc/Typography';
import { Grid, GridCell } from 'rmwc/Grid';
import * as loginActionCreators from "./loginActionCreators";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.userNameChangehandler = this.userNameChangehandler.bind(this);
    this.userPasswordChangehandler = this.userPasswordChangehandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    UserAPI.login({
      username: this.state.username,
      password: this.state.password
    }).then(response => {
      this.props.actions.updateUser(response.data[0]);
    });
  };

  userNameChangehandler(e) {
    this.setState({ username: e.target.value});
  }

  userPasswordChangehandler(e) {
    this.setState({ password: e.target.value})
  };

  render() {
    return (
      <div>
        <Grid>
          <GridCell span="4" />
          <GridCell span="4">
            <Card style={{ width: "21rem" }}>
              <CardPrimaryAction>
                <CardMedia
                  sixteenByNine
                  style={{
                    backgroundImage:
                      "url(https://material-components-web.appspot.com/images/16-9.jpg)"
                  }}
                />
                <div style={{ padding: "0 1rem 1rem 1rem" }}>
                  <Typography use="title" tag="h2">
                    Login To Sport-Team-Schedule
                  </Typography>
                  <Typography
                    use="subheading1"
                    tag="h3"
                    theme="text-secondary-on-background"
                    style={{ marginTop: "-1rem" }}
                  >
                    <TextField
                      label="UserName"
                      value={this.state.username}
                      onChange={this.userNameChangehandler}
                    />
                  </Typography>
                  <Typography
                    use="body1"
                    tag="div"
                    theme="text-secondary-on-background"
                  >
                    <TextField
                      label="PassWord"
                      value={this.state.password}
                      onChange={this.userPasswordChangehandler}
                    />
                  </Typography>
                </div>
              </CardPrimaryAction>
              <CardActions>
                <CardActionButtons>
                  <CardAction onClick={this.onClickHandler}>
                    <Link to="/parent">Login</Link>
                  </CardAction>
                  <Typography>
                    Don't have an account...
                    <span>
                      <CardAction
                        className={
                          window.location.pathname === "/login/signup"
                            ? "active"
                            : ""
                        }
                      >
                        <Link className="Link" to="/login/signup">
                          Sign up
                        </Link>
                      </CardAction>
                    </span>
                  </Typography>
                </CardActionButtons>
              </CardActions>
            </Card>
          </GridCell>
          <GridCell span="4" />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {

  };
};
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(loginActionCreators, dispatch) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

