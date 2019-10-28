import React, { Component } from 'react';
import Home from './pages/Home';
import CreateAnAccount from './pages/CreateAnAccount';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="row">
            <div className="col-md-12">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/create-an-account' component={CreateAnAccount}/>
              <Route path='/login' component={Login}/>
            </Switch>
            </div>
          </div>
      </div>
    );
  }
}

export default Main;
