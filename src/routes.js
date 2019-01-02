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
import Sample1 from './pages/sample/sample1';
import Sample2 from './pages/sample/sample2';
import Sample3 from './pages/sample/sample3';

export default (
  <Switch>
    <Route path="/login" component={Login}></Route>
    <Route path="/signup" component={Signup}></Route>
    <Route path="/app" render={(props)=>{
      return (
      <Dashboard {...props}>
        <Switch>
          <Route exact path="/app/dashboard" component={DashboardContent} />
          <Route exact path="/app/dashboard/sample1" component={Sample1} />
          <Route path="/app/dashboard/sample2" component={Sample2} />
          <Route path="/app/dashboard/sample3" component={Sample3} />
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