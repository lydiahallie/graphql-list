import React, { Component } from 'react';

export default class LoginForm extends Component {
  constructor() {
    super();
    this.emailRef = React.createRef();
    this.passRef = React.createRef();
  }

  loginUser = e => {
    e.preventDefault();
    Meteor.loginWithPassword(
      this.emailRef.current.value,
      this.passRef.current.value,
      (err) => console.log(err));
  }

  render() {
    return (
      <form onSubmit={this.loginUser}> 
        <input type='email' ref={ this.emailRef } />
        <input type='password' ref={ this.passRef } />
        <button type='submit'>Login</button>
      </form>
    );
  }
};