import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from './../../actions/index';
class ReduxList extends React.Component {
  createListItems(){
    return this.props.users.map((user) =>{
      return (
        <li key={user.id} onClick={() => this.props.selectUser(user)}>{user.id}, {user.name}, {user.email}, {user.mobile}</li>
      )
    })
  }
  render() {
    return (
      <div>
        <h3>this is from redux</h3>
        <ul>
          {this.createListItems()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    users:state.users
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectUser:selectUser},dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(ReduxList);