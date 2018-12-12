import React, { Component } from 'react';
import Header from './../components/header/header';
import Sidebar from './sidebar/sidebar';
import './dashboard.css';
import { Router, Route, Switch} from 'react-router-dom';
import Dashboardcomponent from './dashboardContent/dashboardContent';
import UIForms from './uiforms/uiforms';
import CreatedForms from './formsCreated/formscreated';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      formData : {},
      tabIndex: 1
    }
  }

  handleLogOut = () =>{
    this.props.history.push({
      pathname: '/login',
      state: { isUserLoggedIn: false }
    })
  }
  componentDidMount(){
    const {match} = this.props;
  }
  
  saveFormMethod = (formObj)=>{
    console.log(formObj);
    this.setState({formData:formObj});
    this.setState({tabIndex:6});
    this.renderPage();
  }
  renderPage = ()=>{
    var page = this.props.match.params.page;
    switch (page){
      case "dashboard":
        return <Dashboardcomponent/>;
      break;
      case "forms":
        return <UIForms saveForm={this.saveFormMethod}/> ;
      break;
      case "createdForms":
        return <CreatedForms formData={this.state.formData}/> ;
      break;
      default:
        return <Dashboardcomponent/>;
    }
  }
  render() {
    return (
      <div className="dashboard">
        <Header user={this.props.location.state} handleLogOut={this.handleLogOut}></Header>
        <Sidebar></Sidebar>
        <div className="dashboardcontentbody">
          {this.renderPage()}
        </div>
		  </div>
    )
  }
}

export default Dashboard;
