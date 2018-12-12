import React, { Component } from 'react';
import './formscreated.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class FormsCreated extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div className="formsCreated">
        <h2>hi forms</h2>
      </div>
    );
  }
}

export default FormsCreated;
