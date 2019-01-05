import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import './App.css';
import routes from './routes';

class App extends Component {
  
  state = {
    loading: true
  };
  componentDidMount() {
    // the setTimeout just simulates an async action, after which the component will render the content
    setTimeout(() => this.setState({ loading: false }), 1500);
  }
  render() {
    const { loading } = this.state;
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return (
        <div className="loader">
        </div>
      ) // render null when app is not ready
    }
    return (
      <Route>{routes}</Route> 
    )
  }
}

export default App;