import React, { Component } from 'react';

class LoginForm extends Component {
	state = {
		account: { username: '', password: '' },
	};
	handleSubmit = (e) => {
		e.preventDefault();
	};
  handleChange = ({target: input}) => {
   const account ={...this.state.account};
   account[input.name] = input.value;
   this.setState({account})
  }
	render() {
    const {account} = this.state
		return (
			<div>
				<h1>login</h1>
				<form onSubmit={this.handleSubmit}>
					<div className='form-group'>
						<label htmlFor='username'>Username</label>
						<input 
            value={account.username} 
            onChange={this.handleChange}
              id='username' 
              name="username"
              type='text' 
              className='form-control' />
					</div>
					<div className='form-group'>
						<label htmlFor='password'>Password</label>
						<input 
              id='password' 
              type='text' 
              value={account.password} 
              onChange={this.handleChange}
              name="password"
              className='form-control' />
					</div>
				</form>
				<button className='btn btn-primary'>Login</button>
			</div>
		);
	}
}
export default LoginForm;
