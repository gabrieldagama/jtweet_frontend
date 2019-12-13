import React, { Component } from 'react';
import CreateAnAccountForm from '../forms/CreateAccountForm';

class CreateAnAccount extends Component {
  render() {
    return (
      <div className="create-an-account-box">
        <h1>Create an Account</h1>
        <CreateAnAccountForm />
      </div>
    );
  }
}

export default CreateAnAccount;
