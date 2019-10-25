import React, { Component } from 'react';

class CreateAccountForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.name = React.createRef();
    this.username = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.name.current.value);
    alert('A name was submitted: ' + this.username.current.value);
    alert('A name was submitted: ' + this.email.current.value);
    alert('A name was submitted: ' + this.password.current.value);
    event.preventDefault();
  }

  render() {
    return (
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
    );
  }
}

export default CreateAccountForm;
