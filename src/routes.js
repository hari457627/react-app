import React from 'react';
import {Router, Route, Link, Switch} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './components/login/login';
import Signup from './components/signup/signup';

export default (
  <Switch>
    <Route path="/app/:page" component={Dashboard}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/signup" component={Signup}></Route>
  </Switch>
)