import React, { Component } from 'react';
import { Router, Route,Link} from 'react-router-dom';
class Sample1 extends Component {
  constructor(props){
    super(props);
    
  }

  render() {
    return (
      <div className="dashboard">
        <h3>sample 1 page</h3>
        <Link to="/app/dashboard">Back to Dashboard</Link>
		  </div>
    );
  }
}

export default Sample1;
