import React, { Component } from 'react';
import Header from './../components/header/header';
import Sidebar from './sidebar/sidebar';
import './dashboard.css';
import { Router, Route, Switch} from 'react-router-dom';
import Dashboardcomponent from './dashboardContent/dashboardContent';
import UIForms from './uiforms/uiforms';
import CreatedForms from './formsCreated/formscreated';
import ReactstrapForms from './reactstrapForms/reactstrapform';
import { withRouter } from 'react-router-dom';
class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      formData : {},
      tabIndex: 1,
      user:{},
      loading: true
    }
  }

  componentWillMount(){
    setTimeout(() => this.setState({ loading: false }), 10);
    var user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    if(user == null){
      this.props.history.push({
        pathname: '/login'
      })
    }
    else if(this.props.location.state){
      this.setState({user:this.props.location.state.user});
    }
    else{
      this.setState({user:user});
    }
  }

  handleLogOut = () =>{
    this.props.history.push({
      pathname: '/login',
      state: { isUserLoggedIn: false }
    })
  }

  handleProfileSettings = () => {
    var user = JSON.parse(localStorage.getItem('user'));
    this.props.history.push({
      pathname: '/app/profilesettings',
      state: { user: user }
    })
  }
  
  // componentDidMount(){
  //   const {match} = this.props;
  // }
  
  saveFormMethod = (formObj)=>{
    this.setState({formData:formObj});
    this.setState({tabIndex:6},()=>console.log(this.state));
    // this.renderPage();
    // this.props.match.params.page = 'createdForms';
  }

  handleTabIndex = (index) => {
    this.setState({tabIndex:index})
  }

  // renderPage = ()=>{
  //   var page = this.props.match.params.page;
  //   switch (page){
  //     case "dashboard":
  //       return <Dashboardcomponent/>;
  //     break;
  //     case "forms":
  //       return <UIForms saveForm={this.saveFormMethod}/> ;
  //     break;
  //     case "createdForms":
  //       return <CreatedForms formData={this.state.formData}/> ;
  //     break;
  //     case "reactstrapForms":
  //       return <ReactstrapForms/> ;
  //     break;
  //     default:
  //       return <Dashboardcomponent/>;
  //   }
  // }
  
  render() {
    const { loading } = this.state;
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return (
        <div className="loader">
        </div>
      ) // render null when app is not ready
    }
    return (
      <div className="dashboard">
        <Header user={this.state.user} handleLogOut={this.handleLogOut} handleProfileSettings={this.handleProfileSettings}></Header>
        <Sidebar tabIndex={this.state.tabIndex} user={this.state.user}  handleTabIndex={e => this.handleTabIndex(e)}></Sidebar>
        <div className="dashboardcontentbody">
          {/* {this.renderPage()} */}
          {this.props.children}
        </div>
		  </div>
    )
  }
}

export default Dashboard;