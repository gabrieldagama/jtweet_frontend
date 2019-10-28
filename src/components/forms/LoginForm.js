import React, { Component } from 'react';
import { loginUser } from '../../integration/UserIntegration';
import NotificationBar from '../NotificationBar';
import { UserContext } from './../UserStore';
import { Redirect } from 'react-router-dom'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.username = React.createRef();
    this.password = React.createRef();
    this.state = {
      notification: {
        styleName: "hidden",
        msg: ""
      }
    };
  }

  handleSubmit(event, contextLogin) {
    loginUser({
      'username': this.username.current.value,
      'password': this.password.current.value
    }).then(res => {
        contextLogin(this.username.current.value, res.data);
        this.setState(state => ({
          notification: {
            styleName: "alert-success",
            msg: "You are logged in!"
          }
        }));
    }).catch((error) => {
      this.setState(state => ({
        notification: {
          styleName: "alert-warning",
          msg: "Login failed, please try again."
        }
      }));
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="create-an-account-form">
        <NotificationBar styleName={this.state.notification.styleName} msg={this.state.notification.msg} />
        <UserContext.Consumer>
          {({ contextLogin, user }) => (
            <div className="login-form">
              {!user.isLoggedIn ? (   
                <form onSubmit={event => {this.handleSubmit(event, contextLogin)}}>
                  <div className="form-group">
                    <label>
                      Username:
                      <input className="form-control" type="text" ref={this.username} />
                    </label>
                    <br></br>
                    <label>
                      Password:
                      <input className="form-control" type="password" ref={this.password} />
                    </label>
                    <br></br>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                  </div>
                </form>
              ) : (
                <Redirect to='/' />
              )}
            </div>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default LoginForm;
