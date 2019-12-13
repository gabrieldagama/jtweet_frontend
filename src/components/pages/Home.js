import React, { Component } from 'react';
import { UserContext } from '../UserStore';
import { Redirect } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <UserContext.Consumer>
        {({user, contextLogout}) =>
          <div>
            {!user.isLoggedIn ? (
                <Redirect to='/' />
            ) : (
              <div className="tweet-form-box">
                <h1>Tweets Page</h1>
                <a className="nav-link" onClick={contextLogout} href="/">Logout</a>
              </div>
            )}
          </div>
        }
        </UserContext.Consumer>
      </div>
    );
  }
}

export default Home;
