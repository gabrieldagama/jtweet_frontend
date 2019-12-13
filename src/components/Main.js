import React, { Component } from 'react';
import Index from './pages/Index';
import CreateAnAccount from './pages/CreateAnAccount';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="row">
            <div className="col-md-12">
            <Switch>
              <Route exact path='/' component={Index}/>
              <Route exact path='/home' component={Home}/>
              <Route path='/create-an-account' component={CreateAnAccount}/>
            </Switch>
            </div>
          </div>
      </div>
    );
  }
}

export default Main;
