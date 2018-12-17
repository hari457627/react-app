import React from 'react';
import {Router, Route, Link, Switch, BrowserRouter} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import DashboardContent from './pages/dashboardContent/dashboardContent'
import UiForms from './pages/uiforms/uiforms';
import CreatedForms from './pages/formsCreated/formscreated';

export default (
  <Switch>
    <Route path="/app" render={()=>{
      return (
      <Dashboard>
        <Switch>
          <Route exact path="/app/dashboard" component={DashboardContent} />
          <Route path="/app/forms" component={UiForms} />
          <Route path="/app/createdforms" component={CreatedForms} />
        </Switch>
      </Dashboard>)
    }}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/signup" component={Signup}></Route>
    <Route path="/" component={Login}></Route>
  </Switch>
)