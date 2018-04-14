import React, { Component } from "react";
import SignupForm from "./../../components/SignupForm";
import UserAPI from "../../utils/userApi";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as signupActionCreators from "./signupActionCreators";

// allows for text input use 
class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };

    this.userNameChangehandler = this.userNameChangehandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = fields => {
    console.log("fields =", fields);
    UserAPI.signup(fields)
      .then(response => {
      this.props.actions.updateUser(response.data);
    });
  };

  userNameChangehandler(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <div>
        <SignupForm onSubmit={fields => this.onSubmit(fields)} />
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {};
  }

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(signupActionCreators, dispatch) };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);

		