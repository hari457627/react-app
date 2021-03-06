import React, { Component } from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import './login.css';
import Alert from './../alerts/alerts';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import GoogleLogin from 'react-google-login';
import  FacebookLogin  from 'react-facebook-login';
//import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { createStore } from 'redux'

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
        userName: '',
        password: '',
        alertMessage: '',
        showWarning:false
    }
    this.userNameChange = this.userNameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.responseFacebook=this.responseFacebook.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  componentWillMount(){
    var user = localStorage.getItem('user');
    if(user !==null){
      this.props.history.push({
        pathname: '/app/dashboard',
        state: { userName: JSON.parse(user).name }
      })
    }
  }
  
  userNameChange(event) {
    this.setState({userName: event.target.value});
  }

  passwordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.userName==='' || this.state.password===''){
        this.setState({
            alertMessage: '* All the fields are required',
            showWarning:true
        })
        this.refs.alert.toggle();
    }
    else {
      fetch('http://10.9.9.10:2001/api/user/login', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          "username": this.state.userName,
          "password": this.state.password
        })
      }).then((res) => 
        res.json()
      )
      .then((data) => {
        if(data.error){
          alert('invalid user');
        }
        else if(data.message.includes('error') || data.message.includes('invalid')){
          alert('invalid user');
        }
        else{
          let user = data.user;
          user.token = data.token;
          user.isUserLoggedIn = true;
          user.isSocialLogged = false;
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('token',JSON.stringify(data.token));
          
          this.setState({
            isUserLoggedIn: true
          })
          this.props.history.push({
            pathname: '/app/dashboard',
            state: { user: user }
          })
        }
      })
      .catch((err)=>{
        this.setState({
          alertMessage: err,
          showWarning:true
      })
      alert(err);
      })    
    }
  };

  handleClick = () => {
    this.props.history.push("signup"); 
  }

  responseGoogle = (response) => {
    console.log(response);
    if(response.profileObj){
      var user = {};
      user.isUserLoggedIn = true;
      user.isSocialLogged = true;
      user.profilePic = response.profileObj.imageUrl;
      user.email = response.profileObj.email;
      user.name = response.profileObj.name;
      user.username = response.profileObj.givenName;
      localStorage.setItem('user',JSON.stringify(user));
      this.props.history.push({
        pathname: '/app/dashboard',
        state: { user: user }
      })
    }
    else{
      this.props.history.push("login"); 
    }
  }

  responseFacebook = (response) => {
    console.log(response);
    // if(response.id){
    //   var user = {};
    //   user.isUserLoggedIn = true;
    //   user.isSocialLogged = true;
    //   user.name = response.name;
    //   localStorage.setItem('user',JSON.stringify(user));
    //   this.props.history.push('app/dashboard');
    // }
    // else{
    //   this.props.history.push('login');
    // }
  }
  
  render() {
    return (
      <div className="Login">
        <div className="row">
          <div className="col-sm-6 col-md-4 login-box">
            <div className="panel panel-default">
              <div className="panel-heading">
                <strong> Login</strong>
              </div>
              <div className="panel-body">
                <form>
                  <fieldset>
                    <div className="row">
                      <div className="center-block">
                        <img className="profile-img"
                          src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120" alt="" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-md-10  col-md-offset-1">
                        <div className="form-group">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="glyphicon glyphicon-user"></i>
                            </span> 
                            <input className="form-control" placeholder="Username" name="loginname" type="text" value={this.state.userName} onChange={this.userNameChange}/>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="glyphicon glyphicon-lock"></i>
                            </span>
                            <input className="form-control" placeholder="Password" name="password" type="password" value={this.state.password} onChange={this.passwordChange}/>
                          </div>
                        </div>
                        <div className="form-group">
                          <input type="submit" className="btn btn-lg btn-primary btn-block" value="Sign in" data-toggle="modal" onClick={this.handleSubmit}/>
                        </div>
                        <div className="form-group">
                        {/* <GoogleLogin clientId="1011045593602-qob28gmvmsvskk8t7uepl80c8eaaajqo.apps.googleusercontent.com" buttonText="Login" onSuccess={this.responseGoogle} onFailure={this.responseGoogle}/> */}

                        <GoogleLogin
                          clientId="1011045593602-qob28gmvmsvskk8t7uepl80c8eaaajqo.apps.googleusercontent.com"
                          render={renderProps => (
                            <button className="btn btn-danger" onClick={renderProps.onClick}>Google+</button>
                          )}
                          buttonText="Google+"
                          onSuccess={this.responseGoogle}
                          onFailure={this.responseGoogle}/>

                        <FacebookLogin
                          appId="334463787372880"
                          callback={this.responseFacebook}
                          render={renderProps => (
                            <button className="btn btn-primary fb_login" onClick={renderProps.onClick}>Facebook</button>
                          )}
                        />
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
              <div className="panel-footer">
                Don't have an account! <a onClick={this.handleClick}> Sign Up Here </a>
              </div>
            </div>
          </div>
        </div>
        <Alert ref="alert" title={this.state.alertMessage}></Alert>
		  </div>
    );
  }
}

export default Login;
