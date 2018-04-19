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
    return (
      <div>
        <Grid>
          <GridCell span="4" />
          <GridCell span="4">
          <center>
            <Card style={{ width: "35rem" }}>
              <CardPrimaryAction>
                <CardMedia
                  sixteenByNine
<<<<<<< HEAD:client/src/pages/Login/Login.js
                  style={{ backgroundImage: "url(https://material-components-web.appspot.com/images/16-9.jpg)"}}/>
                  <div style={{ padding: "0 1rem 1rem 1rem" }}>
                    <Typography use="title" tag="h2">
                      Login To Sport-Team-Schedule
                    </Typography>
=======
                  style={{
                    backgroundImage:
                      "url(https://m.media-amazon.com/images/S/aplus-media/vc/7895a621-9359-412d-92d2-94c15adc4c70._SL300__.jpg)"
                  }}
                />
                <div style={{ padding: "0 1rem 1rem 1rem" }}>
                  <Typography use="title">
                    <h3>Login</h3>
                  </Typography>
>>>>>>> 96048ef162291808bdf9f7ab6a283e3a0b3b5c50:client/src/pages/Login/Login.js
                  <Typography
                    use="subheading1"
                    theme="text-secondary-on-background"
<<<<<<< HEAD:client/src/pages/Login/Login.js
                    style={{ marginTop: "-1rem" }}>
                    <TextField
                      label="UserName"
                      value={this.state.username}
                      onChange={this.userNameChangehandler}/>
=======
                    style={{ marginTop: "-1rem" }}
                  >
                    <h5><TextField
                      label="Username"
                      value={this.state.username}
                      onChange={this.userNameChangehandler}
                    /></h5>
>>>>>>> 96048ef162291808bdf9f7ab6a283e3a0b3b5c50:client/src/pages/Login/Login.js
                  </Typography>
                  <Typography
                    use="body1"
                    tag="div"
<<<<<<< HEAD:client/src/pages/Login/Login.js
                    theme="text-secondary-on-background">
                    <TextField
                      label="PassWord"
                      value={this.state.password}
                      onChange={this.userPasswordChangehandler}
                      type="password"/>
=======
                    theme="text-secondary-on-background"
                  >
                    <h5><TextField
                      label="Password"
                      value={this.state.password}
                      onChange={this.userPasswordChangehandler}
                    /></h5>
>>>>>>> 96048ef162291808bdf9f7ab6a283e3a0b3b5c50:client/src/pages/Login/Login.js
                  </Typography>
                </div>
              </CardPrimaryAction>
              <CardActions>
                <CardActionButtons>
                  <CardAction onClick={this.onClickHandler}>
                    <Link to="/parent"><h4>Login</h4></Link>
                  </CardAction>
<<<<<<< HEAD:client/src/pages/Login/Login.js
                  <Typography> Don't have an account...
                    <span>
                      <CardAction>
=======
                  <Typography>
                    <span>
                      <CardAction
                      >
>>>>>>> 96048ef162291808bdf9f7ab6a283e3a0b3b5c50:client/src/pages/Login/Login.js
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

