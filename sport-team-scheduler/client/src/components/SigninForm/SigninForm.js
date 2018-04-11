import React, { Component } from "react";
import "./SigninForm.css";

class SigninForm extends Component {
	state={
		username:'',	      
		name:'',
		kidsName:'',
		number:'',
		email:'',
		Password:'',
		Password2:''
	};

	change = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state);
		this.setState({
			username:'',	      
			name:'',
			kidsName:'',
			number:'',
			email:'',
			Password:'',
			Password2:''
		});
	};


	render(){
		return(
		<div className="container">
			<div className="col-lg-4" />	
			<div className="col-lg-3">
				<div class="panel panel-default">
 				<div className="panel-body">
			    	<h3 className="text-center">Sign Up Here</h3>	
					<form className="text-center">
					<div className="input-group">
						<label>Username:</label>
						<input type="text" placeholder="Username" value={this.state.username} 
	  						name="username"  onChange={e => this.change(e)}/>
					</div>
					<br />
					<div className="input-group">
						<label>Full Name:</label>
		  				<input type="text" placeholder="Your Full Name"  value={this.state.name}
	  						onChange={e => this.change(e)} name="name" />
					</div>
					<br />
					<div className="input-group">
						<label>Child's Name:</label>
		  				<input type="text" placeholder="Your Child's Full Name" value={this.state.kidsName} 
	  						onChange={e => this.change(e)} name="kidsName"/>
					</div>
					<br />
					<div className="input-group">
						<label>Email Adress:</label>					
		  				<input type="text"  placeholder="Email" value={this.state.email} 
	  						onChange={e => this.change(e)} name="email" />
					</div>				
					<br />
					<div className="input-group">
						<label>PhoneNumber:</label>					
		  				<input type="text" placeholder="PhoneNumber" value={this.state.number} 
	  						onChange={e => this.change(e)} name="number"/>
					</div>				
					<br />
					<div className="input-group">
						<label>Password:</label>					
		  				<input type="password" placeholder="Password"  value={this.state.Password}
		  					onChange={e => this.change(e)}  name="Password"/>
					</div>
					<br />
					<div className="input-group">
						<label>Confirm Password:</label>
		  				<input type="password"  placeholder="Confirm Password" value={this.state.Password2}  
		  					onChange={e => this.change(e)} name="Password2" />
					</div>								
					<br />
					<div className="input-group">
						<button className="btn" onClick={e => this.onSubmit(e)}>Sign Up</button>
					</div>	
					</form>
					</div>
				</div>
			</div>
			<div className="col-lg-4"/>
		</div>

		)}
}
export default SigninForm;