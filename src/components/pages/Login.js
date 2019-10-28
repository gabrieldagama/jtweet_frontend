import React, { Component } from 'react';
import LoginForm from '../forms/LoginForm';
class Login extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Login</h1>
        <LoginForm />
      </div>
    );
  }
}

export default Login;
