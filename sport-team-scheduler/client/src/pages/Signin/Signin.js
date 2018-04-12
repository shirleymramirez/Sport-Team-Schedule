import React, { Component } from "react";
import SigninForm from "./../../components/SigninForm";
// allows for text input use 

class SigninPage extends Component {
		
	onSubmit =(fields) => {
		console.log("fields =", fields);
	};

	render(){
		return(
 			<div>	
			<SigninForm onSubmit={fields => this.onSubmit(fields)} />
			</div>
	)};
};

export default SigninPage;
		