import React, { Component } from 'react';
import './header.css';
import { Router, Route, Switch} from 'react-router-dom';
import userLogo from '../../images/userLogo.png';
import Logo from '../../images/Wavelabs-logo.png';
import routes from './../../routes';
class Header extends Component {
  constructor(props){
    console.log(props);
    super(props);
    this.state = {
      userLogo:userLogo,
      user:{}
    }
  }

  handleLogout = () =>{
    localStorage.clear();
    this.props.handleLogOut();
  }

  profileSettingsNavigate = () => {
    this.props.handleProfileSettings();
  }

  componentWillMount(){
    if(this.props.user){
      if('profilePic' in this.props.user){
        this.setState({userLogo:this.props.user.profilePic});
      }
    }
    else if(localStorage.getItem('user')){
      console.log(localStorage.getItem('user'));
      this.setState({user:JSON.parse(localStorage.getItem('user'))})
      if(JSON.parse(localStorage.getItem('user')).profilePic){
        this.setState({userLogo:JSON.parse(localStorage.getItem('user')).profilePic});
        this.props.user = JSON.parse(localStorage.getItem('user'));
      }
    }
  }
  
  render() {
    return (
      <nav className="navbar navbar-default navbar-inverse" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"><img src={Logo} className="logoNavbar"/></a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><p className="navbar-text">Hello {this.state.user.name || this.props.user.name}</p></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><img src={this.state.userLogo} className="userLogoSettings"/><span className="caret"></span></a>
                <ul id="login-dp" className="dropdown-menu">
                  <li onClick={this.handleLogout}><a>Logout</a></li>
                  <li onClick={this.profileSettingsNavigate}><a>Proile settings</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;








