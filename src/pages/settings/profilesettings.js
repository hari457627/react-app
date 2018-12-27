import React, { Component } from 'react';
import './profilesettings.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import Parse from 'parse';
import axios from 'axios';
class Settings extends Component {
  constructor(props){
    super(props);
    this.state={
      id:'',
      username: '',
      password: '',
      mobile:'',
      name:'',
      email:'',
      cpassword:'',
      profilePic:'https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder-300-grey.jpg',
      alertMessage: '',
      accessToken:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleFileupload = this.handleFileupload.bind(this);
  }

  componentWillMount(){
    if(this.props.location.state){
      this.setState({username:this.props.location.state.user.username,mobile:this.props.location.state.user.mobile,email:this.props.location.state.user.email,name:this.props.location.state.user.name,id:this.props.location.state.user.id,accessToken:JSON.parse(localStorage.getItem('token'))});
      if('profilePic' in this.props.location.state.user){
        this.setState({profilePic:this.props.location.state.user.profilePic})
      }
    }
    else if(localStorage.getItem('user')){
      this.setState({id:JSON.parse(localStorage.getItem('user')).id,name:JSON.parse(localStorage.getItem('user')).name,email:JSON.parse(localStorage.getItem('user')).email,mobile:JSON.parse(localStorage.getItem('user')).mobile,username:JSON.parse(localStorage.getItem('user')).username})
      if('profilePic' in JSON.parse(localStorage.getItem('user'))){
        this.setState({profilePic:JSON.parse(localStorage.getItem('user')).profilePic})
      }
      if(JSON.parse(localStorage.getItem('token'))){
        this.setState({accessToken:JSON.parse(localStorage.getItem('token')).token});
      }
      else{
        this.setState({accessToken:JSON.parse(localStorage.getItem('user')).token});
      }
    }
  }

  handleChange = (e) =>{
		switch (e.target.id) {
			case 'name':
				this.setState({name: e.target.value});
			break;
			case 'username':
				this.setState({username: e.target.value});
			break;
			case 'email':
				this.setState({email: e.target.value});
			break;
			case 'mobile':
				this.setState({mobile: e.target.value});
			break;
			case 'password':
				this.setState({password: e.target.value});
      break;
			default:
				this.setState({cpassword: e.target.value});
			break;
		}
  }

  handleFileupload(e){
    var formData = new FormData();
    formData.append('file',e.target.files[0]);
    if(e.target.files[0].type.includes("image/")){
      fetch('http://10.9.9.10:2001/api/users/fileupload',{
					method: 'POST',
          "access-control-allow-origin" : "*",
          body:formData
			}).then((res) => res.json())
				.then((data) => {
					if(data.message){
						alert(data.message)
					}
					else if(data.errmsg){
						alert(data.errmsg);
          }
          else{
            this.setState({profilePic:'http://10.9.9.10:2001/images/'+data.filename})
          }
				}).catch((err)=>alert(err))
    }
    else{
      alert('upload only image formats')
    }
  }
  
  handleUpdate(event){
    event.preventDefault();
    if(this.state.username == '' || this.state.name == '' || this.state.email == '' || this.state.mobile == '' || this.state.password == '' || this.state.cpassword == ''){
      alert('all fields are required');
    }
    else if(this.state.cpassword == this.state.password){
      fetch(`http://10.9.9.10:2001/api/users/${this.state.id}`,{
          method: 'PUT',
          headers:{
            'Content-Type':'application/json',
            'Authorization':this.state.accessToken
          },
					body: JSON.stringify({
						"name": this.state.name,
						"username": this.state.username,
						"password": this.state.password,
						"mobile": this.state.mobile,
            "email": this.state.email,
            "profilePic":this.state.profilePic,
            "token":this.state.accessToken
					})
        }).then((res) => res.json())
        .then((data) => {
          console.log(data);
					if(data.message){
						alert(data.message)
					}
					else if(data.errmsg){
						if(data.errmsg.includes("username_1")){
							alert('username already exists');
						}
						else if(data.errmsg.includes("email_1")){
							alert('email already exists');
						}
						else{
							alert('mobile number already exists');
						}
					}
					else{
            alert('profile updated successfully');
            
            localStorage.setItem('user',JSON.stringify(data));
            console.log(localStorage.getItem('user'))
						this.props.history.push("/app/profilesettings");
					}
				}
				)
        .catch((err)=>alert(err))
    }
    else{
      alert('passwords should match');    
    }
  }
  
  render() {
    return (
      <div className="profileSettings">
        <div className="row">
          <div className="col-md-12">
            <h2>profile settings</h2>
            <div className="profileCard">
              <Card>
                <CardImg top width="100%" src={this.state.profilePic} alt="Card image cap" />
                <CardBody>
                  <CardTitle>{this.state.name}</CardTitle>
                  <CardSubtitle>{this.state.username}</CardSubtitle>
                  <CardSubtitle>{this.state.email}</CardSubtitle>
                  <CardSubtitle>{this.state.mobile}</CardSubtitle>
                </CardBody>
              </Card>
            </div>
            <div className="profileModify">
              <form className="form-horizontal" method="post">	
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="cols-sm-2 control-label">Your Name</label>
                    <div className="cols-sm-10">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                        <input type="text" className="form-control" name="name" id="name"  placeholder="Enter your Name" value={this.state.name} onChange={this.handleChange} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="cols-sm-2 control-label">Your Email</label>
                    <div className="cols-sm-10">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                        <input type="text" className="form-control" name="email" id="email"  placeholder="Enter your Email" value={this.state.email} onChange={this.handleChange}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="cols-sm-2 control-label">Your Mobile</label>
                    <div className="cols-sm-10">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-mobile fa" aria-hidden="true"></i></span>
                        <input type="text" className="form-control" name="mobile" id="mobile"  placeholder="Enter your Mobile" value={this.state.mobile} onChange={this.handleChange}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="cols-sm-2 control-label">Username</label>
                    <div className="cols-sm-10">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
                        <input type="text" className="form-control" name="username" id="username"  placeholder="Enter your Username" value={this.state.username} onChange={this.handleChange}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="cols-sm-2 control-label">Password</label>
                    <div className="cols-sm-10">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                        <input type="password" className="form-control" name="password" id="password"  placeholder="Enter your Password" value={this.state.password} onChange={this.handleChange}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="cols-sm-2 control-label">Confirm Password</label>
                    <div className="cols-sm-10">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                        <input type="password" className="form-control" name="confirm" id="cpassword"  placeholder="Confirm your Password" value={this.state.cpassword} onChange={this.handleChange}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <span className="control-fileupload">
                    <label for="file">Choose profile picture:</label>
                    <input type="file" id="file" name="file" onChange={this.handleFileupload}/>
                  </span>
                  <p>&nbsp;</p>
                </div>
                <div className="col-md-7 updateButton">
                  <button type="button" className="btn btn-primary btn-lg login-button" onClick={this.handleUpdate}>Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
