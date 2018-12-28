import React , {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { User } from 'parse';

class Userlist extends Component{
  render(){
    return(
      <div>
        <h3>List of users from reducer</h3>
        <ul>
          <li>
            one
          </li>
          <li>
            two
          </li>
          <li>
            three
          </li>
        </ul>
      </div>
    )
  }
}
export default Userlist;