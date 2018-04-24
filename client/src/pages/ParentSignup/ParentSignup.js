import React, { Component } from "react";
import ParentSignupForm from "./../../components/ParentSignupForm";
import UserAPI from "../../utils/userApi";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as parentsignupActionCreators from "./parentsignupActionCreators";

// allows for text input use 
class ParentSignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };

    this.userNameChangehandler = this.userNameChangehandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = fields => {
    UserAPI.parentsignup(fields).then(response => {
      console.log(response);
      this.props.actions.updateUser(response.data);
    });
  };

  userNameChangehandler(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <div>
        <ParentSignupForm onSubmit={fields => this.onSubmit(fields)} />
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
    return {};
  }

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(parentsignupActionCreators, dispatch) };
};
export default connect(mapStateToProps, mapDispatchToProps)(ParentSignupPage);

		