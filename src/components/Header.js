import React, { Component } from 'react';
import { UserContext } from './UserStore';

class Header extends Component {
  render() {
    const { history } = this.props
    return (
      <div className="Header">
          <div className="row">
            <div className="col-md-12">
            <UserContext.Consumer>
              {({user, contextLogout}) =>
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">JTweet</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                          <a className="nav-link" href="/">Home</a>
                        </li>
                      </ul>
                      <span className="navbar-text">    
                      {!user.isLoggedIn ? (                
                        <ul className="navbar-nav mr-auto">
                          <li className="nav-item">
                            <a className="nav-link" href="/create-an-account">Create an Account</a>
                          </li>
                        </ul>   
                      ) : (
                        <ul className="navbar-nav mr-auto">
                          <li className="nav-item">
                            <a className="nav-link" onClick={contextLogout} href="/">Logout</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-text">{user.username}</a>
                          </li>
                        </ul>   
                      )}           
                      </span>
                    </div>
                  </nav>
                }
              </UserContext.Consumer>
            </div>
          </div>
      </div>
    );
  }
}

export default Header;
