import React from 'react';
import {Router, Route, Link, Switch, BrowserRouter} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import DashboardContent from './pages/dashboardContent/dashboardContent'
import UiForms from './pages/uiforms/uiforms';
import CreatedForms from './pages/formsCreated/formscreated';
import ProfileSettings from './pages/settings/profilesettings';
import ReduxList from './pages/reduxSample/reduxSample';
export default (
  <Switch>
    <Route path="/login" component={Login}></Route>
    <Route path="/signup" component={Signup}></Route>
    <Route path="/app" render={(props)=>{
      return (
      <Dashboard {...props}>
        <Switch>
          <Route exact path="/app/dashboard" component={DashboardContent} />
          <Route path="/app/forms" component={UiForms} />
          <Route path="/app/createdforms" component={CreatedForms} />
          <Route path="/app/profilesettings" component={ProfileSettings} />
          <Route path="/app/reduxlist" component={ReduxList} />
        </Switch>
      </Dashboard>)
    }}></Route>
    <Route path="/" component={Login}></Route>
  </Switch>
)