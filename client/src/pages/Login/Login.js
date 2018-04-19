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
      password: "",
      isAuthenticated: false
    };

    this.userNameChangehandler = this.userNameChangehandler.bind(this);
    this.userPasswordChangehandler = this.userPasswordChangehandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    e.preventDefault();
    UserAPI.login({
      username: this.state.username,
      password: this.state.password
    }).then(response => {
      this.props.actions.updateUser(response.data[0]);
    }).catch((err, res) => {
      if(err) {
        this.setState({ errorMessage: "Authentication Failed"})
      }
      localStorage.setItem('token', res.body.token)
      console.log(res.body);
      this.getItem('token');
    })
  };

  userNameChangehandler(e) {
    this.setState({ username: e.target.value});
  }

  userPasswordChangehandler(e) {
    this.setState({ password: e.target.value})
  };

  isAuthenticated(){
    const token = localStorage.getItem('token');
     return token && token.length > 10 ;
  }

  render() {
    return <div>
        <Grid>
          <GridCell span="4" />
          <GridCell span="4">
            <center>
              <Card style={{ width: "35rem" }}>
                <CardPrimaryAction>
                  <CardMedia sixteenByNine style={{ backgroundImage: "url(https://m.media-amazon.com/images/S/aplus-media/vc/7895a621-9359-412d-92d2-94c15adc4c70._SL300__.jpg)" }} />
                  <div style={{ padding: "0 1rem 1rem 1rem" }}>
                    <Typography use="title">
                      <h3>Login</h3>
                    </Typography>
                    <Typography use="subheading1" theme="text-secondary-on-background" style={{ marginTop: "-1rem" }}>
                      <h5>
                        <TextField label="Username" value={this.state.username} onChange={this.userNameChangehandler} />
                      </h5>
                    </Typography>
                    <Typography use="body1" tag="div" theme="text-secondary-on-background">
                      <h5>
                        <TextField label="Password" value={this.state.password} onChange={this.userPasswordChangehandler} type="password" />
                      </h5>
                    </Typography>
                  </div>
                </CardPrimaryAction>
                <CardActions>
                  <CardActionButtons>
                    <CardAction onClick={this.onClickHandler}>
                      <Link to="/parent">
                        <h4>Login</h4>
                      </Link>
                    </CardAction>
                    <Typography>
                      <span>
                        <CardAction>
                          <Link className="Link" to="/login/signup">
                            <h4>Sign up</h4>
                          </Link>
                        </CardAction>
                      </span>
                    </Typography>
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

const mapStateToProps = (state, ownProps) => {
  return {
  };
};
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(loginActionCreators, dispatch) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

