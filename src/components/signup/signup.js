import React, { Component } from 'react';
import './signup.css';
import Alert from './../alerts/alerts';
class Signup extends Component {
	constructor(){
    super();
    this.state={
        username: '',
        password: '',
				mobile:'',
				name:'',
				email:'',
				cpassword:'',
				alertMessage: '',
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleRegister = this.handleRegister.bind(this);
		this.handleClick = this.handleClick.bind(this);
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

	handleRegister(event){
		event.preventDefault();
			if(this.state.username == '' || this.state.name == '' || this.state.email == '' || this.state.mobile == '' || this.state.password == '' || this.state.cpassword == ''){
				this.setState({
					alertMessage: '* All the fields are required',
					showWarning:true
			})
				this.refs.alert.toggle();
			}
			else if(this.state.cpassword == this.state.password){
				fetch('http://10.9.9.10:2001/api/users/signup', {
					method: 'POST',
					"access-control-allow-origin" : "*",
					headers:{
						"Content-Type":"application/json",
						"Accept":"application/json"
					},
					body: JSON.stringify({
						"name": this.state.name,
						"username": this.state.username,
						"password": this.state.password,
						"mobile": this.state.mobile,
						"email": this.state.email
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
						this.props.history.push("/login");
					}
				}
				)
				.catch((err)=>alert(err))
			}
			else{
				this.setState({
					alertMessage: 'passwords should match',
					showWarning:true
			})
				this.refs.alert.toggle();
			}
	};

	handleClick = () =>{
		this.props.history.push('/login');
	}
	
  render() {
    return (
      <div className="row main">
				<div className="main-login main-center">
					<form className="form-horizontal" method="post" action="#">	
						<div className="form-group">
							<label className="cols-sm-2 control-label">Your Name</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="name" id="name"  placeholder="Enter your Name" value={this.state.name} onChange={this.handleChange} />
								</div>
							</div>
						</div>

						<div className="form-group">
							<label className="cols-sm-2 control-label">Your Email</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="email" id="email"  placeholder="Enter your Email" value={this.state.email} onChange={this.handleChange}/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label className="cols-sm-2 control-label">Your Mobile</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-mobile fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="mobile" id="mobile"  placeholder="Enter your Mobile" value={this.state.mobile} onChange={this.handleChange}/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label className="cols-sm-2 control-label">Username</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="username" id="username"  placeholder="Enter your Username" value={this.state.username} onChange={this.handleChange}/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label className="cols-sm-2 control-label">Password</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="password" className="form-control" name="password" id="password"  placeholder="Enter your Password" value={this.state.password} onChange={this.handleChange}/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label className="cols-sm-2 control-label">Confirm Password</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="password" className="form-control" name="confirm" id="cpassword"  placeholder="Confirm your Password" value={this.state.cpassword} onChange={this.handleChange}/>
								</div>
							</div>
						</div>

						<div className="form-group ">
							<button type="button" className="btn btn-primary btn-lg btn-block login-button" onClick={this.handleRegister}>Register</button>
						</div>
						<div className="login-register">
				      <a onClick={this.handleClick}>Login</a>
				    </div>
					</form>
				</div>
				<Alert ref="alert" title={this.state.alertMessage}></Alert>
			</div>
    );
  }
}

export default Signup;