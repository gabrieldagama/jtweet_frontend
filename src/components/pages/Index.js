import React, { Component } from 'react';
import { UserContext } from '../UserStore';
import LoginForm from '../forms/LoginForm';
import { Redirect } from 'react-router-dom'

class Index extends Component {
  render() {
    return (
      <div>
        <UserContext.Consumer>
        {({user, contextLogout}) =>
          <div>
            {!user.isLoggedIn ? (
              <div className="login-box">
                <h1>Login</h1>
                <LoginForm />
                <div>
                  <p>... or <a href="/create-an-account">create an account</a></p>
                </div>
              </div>
            ) : (
              <Redirect to="/home" />
            )}
          </div>
        }
        </UserContext.Consumer>
      </div>
    );
  }
}

export default Index;
