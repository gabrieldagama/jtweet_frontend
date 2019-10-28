import React, { Component } from 'react';
import { createUser } from '../../integration/UserIntegration';
import NotificationBar from '../NotificationBar';

class CreateAccountForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.name = React.createRef();
    this.username = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
    this.state = {
      notification: {
        styleName: "hidden",
        msg: ""
      }
    };
  }

  handleSubmit(event) {
    createUser({
      'name': this.name.current.value,
      'username': this.username.current.value,
      'email': this.email.current.value,
      'password': this.password.current.value
    }).then(res => {
      if (res.status === 201) {
        this.setState(state => ({
          notification: {
            styleName: "alert-success",
            msg: "User Created Successfully!"
          }
        }));
      } else {
        this.setState(state => ({
          notification: {
            styleName: "alert-warning",
            msg: "Please check all fields below!"
          }
        }));
      }
    }).catch((error) => {
      this.setState(state => ({
        notification: {
          styleName: "alert-danger",
          msg: "Something went wrong, please try again later!"
        }
      }));
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="create-an-account-form">
        <NotificationBar styleName={this.state.notification.styleName} msg={this.state.notification.msg} />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Name:
              <input className="form-control" type="text" ref={this.name} />
            </label>
            <br></br>
            <label>
              Username:
              <input className="form-control" type="text" ref={this.username} />
            </label>
            <br></br>
            <label>
              Email:
              <input className="form-control" type="text" ref={this.email} />
            </label>
            <br></br>
            <label>
              Password:
              <input className="form-control" type="text" ref={this.password} />
            </label>
            <br></br>
            <input className="btn btn-primary" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateAccountForm;
