import React, { Component } from 'react';
import { Router, Route} from 'react-router-dom';
class Uiforms extends Component {
  constructor(props){
    super(props);
    this.state = {
      field1 : {
        "type" : "input",
        "no_of_fields" : null,
        "fields":[]
      },
      field2 : {
        "type" : "radio",
        "no_of_fields" : null,
        "fields":[
          {"text":"",
           "options":[],
           "no_of_options":null
          }
        ]
      }
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.inputfieldTypeChange = this.inputfieldTypeChange.bind(this);
    this.noOfInputsChange = this.noOfInputsChange.bind(this);
  }

  onSubmit(){
    var formObj = this.state;
    var sampleObj = [
      {
        "type":"input",
        "inputType":"text",
        "label":"enter your name",
        "required":"false"
      },
      {
        "type":"input",
        "inputType":"email",
        "label":"enter your email",
        "required":"true"
      },
      {
        "type":"input",
        "inputType":"number",
        "label":"enter your mobile",
        "required":"true"
      },
      {
        "type":"input",
        "inputType":"password",
        "label":"enter your password",
        "required":"true"
      },
      {
        "type":"input",
        "inputType":"password",
        "label":"confirm your password",
        "required":"true"
      },
      {
        "type":"radio",
        "label":"select your gender",
        "required":"true",
        "options":["male","female"]
      },
      {
        "type":"multiselect",
        "label":"select your hobbies",
        "required":"true",
        "options":["playing cricket","reading books","browsing internet","other"]
      }
    ];
    var finalObj = {};
    finalObj.fields = [];
    finalObj.fields = sampleObj;
    // this.props.saveForm(finalObj);
    this.props.history.push({
      pathname: '/app/createdforms',
      state: { formData: finalObj }
    })
  }

  noOfInputsChange(e){
    e.preventDefault();
    const {field1} = this.state;
    field1.no_of_fields = e.target.value;
    this.setState({field1});
    this.setFields(e.target.value);
  }

  setFields(no_of_fields){
    const {field1} = this.state;
    field1.fields = [];
    for(let i=0; i < no_of_fields; i++){
      field1.fields.push({"type":"text","label":""})
    }
    this.setState({field1});
  }

  inputfieldTypeChange =(type,i,e)=>{
    const {field1} = this.state;
    if(type == 'text'){
      field1.fields[i].label = e.target.value;
    }
    else{
      field1.fields[i].type = e.target.value;
    }
    this.setState({field1});
  }

  render() {
    return (
      <div className="dashboard">
        <h3>create forms</h3>
        <div className="form-group">
          <label for="inputtype">Type Input:</label>
          <input type="number" className="form-control" id="inputtype" placeholder="Enter no of fields to create" name="inputtype" value={this.state.field1.no_of_fields} onChange={this.noOfInputsChange}/>
        </div>
        <h3>Enter labels</h3>
        {
          this.state.field1.fields.map((res,i) => 
          (
            <div className="row form-group">
              <div className="col-md-6">
                <label for="inputtype">Enter label:</label>
                <input type="text" className="form-control" placeholder="Enter label for field" value={res.label} onChange={(e) => this.inputfieldTypeChange('text',i,e)}/>
              </div>
              <div className="col-md-6">
                <label for="inputtype">Enter type:</label>
                <select className="form-control" onChange={(e) => this.inputfieldTypeChange('type',i,e)}>
                  <option>text</option>
                  <option>number</option>
                  <option>email</option>
                  <option>password</option>
                </select>
              </div>
              
            </div>
          )
        )
        }
        {/* <div class="form-group">
          <label for="inputtype">Type Radio:</label>
          <input type="text" class="form-control" id="radiotype" placeholder="Enter no of fields to create" name="radiotype" value={this.state.field1.no_of_fields} onChange={this.inputfieldTypeChange}/>
        </div> */}
        <button className="btn btn-default" onClick={this.onSubmit}>submit</button>
		  </div>
    );
  }
}

export default Uiforms;
