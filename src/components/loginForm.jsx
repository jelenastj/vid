import React, { Component } from 'react'

 class LoginForm extends Component {
   username= React.createRef();

   componentDidMount(){
     this.username.current.focus()
   }
   handleSubmit = e => {
     e.preventDefault()
     const username = this.username.current.value;
   };
  render() {
    return (
     <div>
       <h1>login</h1>
       <form onSubmit={this.handleSubmit}>
         <div className="form-group"><label htmlFor="username">Username</label>
         <input ref={this.username}id="username" type="text" className="form-control"/></div>
         <div className="form-group"><label htmlFor="password">Password</label>
         <input id="password" type="text" className="form-control"/></div>
       </form>
       <button className="btn btn-primary">Login</button>
     </div>
    )
  }
}
export default LoginForm