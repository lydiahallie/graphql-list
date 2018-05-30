import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class RegisterForm extends Component {
  constructor() {
    super();
    this.emailRef = React.createRef();
    this.passRef = React.createRef();
  }

  registerUser = e => {
    e.preventDefault();
    Accounts.createUser({
      email: this.emailRef.current.value,
      password: this.passRef.current.value,
    }, (err) => console.log(err));
  }

  render() {
    return (
      <form onSubmit={this.registerUser}> 
        <input type='email' ref={ this.emailRef } />
        <input type='password' ref={ this.passRef } />
        <button type='submit'>Register User</button>
      </form>
    );
  }
}