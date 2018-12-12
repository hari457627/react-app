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
      tabIndex: 1,
      user:''
    }
  }

  componentWillMount(){
    var user = localStorage.getItem('user');
    if(user == null){
      this.props.history.push({
        pathname: '/login'
      })
    }
    else if(user !== null){
      this.setState({user:JSON.parse(localStorage.getItem('user')).name})
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
    this.setState({formData:formObj});
    this.setState({tabIndex:6},()=>console.log(this.state));
    this.renderPage();
    this.props.match.params.page = 'createdForms';
  }

  handleTabIndex = (index) => {
    this.setState({tabIndex:index})
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
        <Header user={this.state.user} handleLogOut={this.handleLogOut}></Header>
        <Sidebar tabIndex={this.state.tabIndex} handleTabIndex={e => this.handleTabIndex(e)}></Sidebar>
        <div className="dashboardcontentbody">
          {this.renderPage()}
        </div>
		  </div>
    )
  }
}

export default Dashboard;
