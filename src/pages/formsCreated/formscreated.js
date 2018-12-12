import React, { Component } from 'react';
import './formscreated.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class FormsCreated extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      field1:{}
    }
  }

  componentWillMount(){
    let field1 = {};
    field1 = this.props.formData.field1;
    this.setState({field1});
    console.log(this.state);
  }
  
  render() {
    return (
      <div className="formsCreated">
        <h2>Created Forms</h2>
        {
          this.state.field1.fields.map((res,i) => 
          (
            <div className="row form-group">
              <div className="col-md-offset-2 col-md-8">
                <label>{res.label}</label>
                <input type={res.type} className="form-control" />
              </div>
            </div>
          )
        )
        }
      </div>
    );
  }
}

export default FormsCreated;
