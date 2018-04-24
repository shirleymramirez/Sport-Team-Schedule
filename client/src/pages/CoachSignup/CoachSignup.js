import React, { Component } from "react";
import CoachSignupForm from "./../../components/CoachSignupForm";
import UserAPI from "../../utils/userApi";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as coachsignupActionCreators from "./coachsignupActionCreators";

// allows for text input use 
class CoachSignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };

    this.userNameChangehandler = this.userNameChangehandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = fields => {
    UserAPI.coachsignup(fields).then(response => {
      this.props.actions.updateUser(response.data);
    });
  };

  userNameChangehandler(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <div>
        <CoachSignupForm onSubmit={fields => this.onSubmit(fields)} />
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
    return {};
  }

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(coachsignupActionCreators, dispatch) };
};
export default connect(mapStateToProps, mapDispatchToProps)(CoachSignupPage);

		