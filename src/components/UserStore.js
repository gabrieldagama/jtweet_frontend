import React, { Component } from 'react';
import cookie from 'react-cookies'

export const UserContext = React.createContext({
    user: {},
    contextLogin: () => {},
    contextLogout: () => {}
  });

class UserStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        isLoggedIn: cookie.load('isLoggedIn'),
        username: cookie.load('username'),
        token: cookie.load('token')
      }
    }
    this.contextLogin = (username, token) => {
      this.setState({
        user: {
          isLoggedIn: 1,
          username: username,
          token: token
        }
      });
      cookie.save('isLoggedIn', true, { path: '/' });
      cookie.save('username', username, { path: '/' });
      cookie.save('token', token, { path: '/' });
    }
    this.contextLogout = () => {
      cookie.remove('isLoggedIn', { path: '/' });
      cookie.remove('username', { path: '/' });
      cookie.remove('token', { path: '/' });
    }
  }

  render() {
    return (
        <UserContext.Provider value={{user: this.state.user, contextLogin: this.contextLogin, contextLogout: this.contextLogout}}>
          {this.props.children}
        </UserContext.Provider>
      );
  }
}

export default UserStore;
