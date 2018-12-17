import React, { Component } from 'react';
import './formscreated.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class FormsCreated extends Component {
  constructor(props){
    super(props);
    this.state = {
      field1:{}
    }
  }

  componentWillMount(){
    console.log(this.props.location.state.formData);
    let field1 = {};
    field1 = this.props.location.state.formData;
    this.setState({field1});
  }
  
  render() {
    return (
      <div className="formsCreated">
        <h2>Created Forms</h2>
        {/* {
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
        } */}
        <hr />
        {
          this.state.field1.fields.map((res,i) => {
            if(res.type== "input"){
              return (
                <div className="row form-group">
                  <div className="col-md-offset-2 col-md-8">
                    <label>{res.label}</label>
                    <input type={res.type} className="form-control" />
                  </div>
                </div>
              )
            }
            else if(res.type== "radio"){
              return (
                <div className="row form-group">
                  <div className="col-md-offset-2 col-md-8">
                    <label className="radio">{res.label}
                    {
                      res.options.map((opt,i) =>{
                      return (
                        <div className="form-group radio_inputs"><input type="radio" name="optradio" />{opt}</div>
                      )
                    }) 
                    }
                    </label>
                  </div>
                </div>              
              )
            }
            else{
              return(
                <div className="row form-group">
                  <div className="col-md-offset-2 col-md-8">
                    <label className="radio">{res.label}
                      {
                        res.options.map((opt,i) =>{
                        return (
                          <div className="checkbox">
                            <label><input type="checkbox" value="" />{opt}</label>
                          </div>
                        )
                      }) 
                      }
                    </label>
                  </div>
                </div> 
              )
            }
        }
        )
        }
      </div>
    );
  }
}

export default FormsCreated;
