import React, { Component } from 'react';
import { Router, Route, Switch, IndexRedirect} from 'react-router-dom';
import Dashboardcomponent from './../dashboardContent/dashboardContent';
import UIForms from './../uiforms/uiforms';
class Main extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Dashboardcomponent />
    );
  }
}

export default Main;
