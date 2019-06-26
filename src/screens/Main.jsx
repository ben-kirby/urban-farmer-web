import React, { Component } from 'react';

export default class Main extends Component {
	state = {
		email: null,
		password: null
	};

	handleEmailUpdate = (e) => {
		console.log(e.target.value);
		this.setState({
			email: e.target.value
		});
	}
	
	handleLogin = () => {
	
	}


	render(){
		return(
			<div>
				<input
					placeholder = "email"
					type = 'email'
					onChange = {this.handleEmailUpdate}
				/>
				<input
					placeholder='password'
					type='password'
				/>
			</div>
		);
	}
}