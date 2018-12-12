import React, { Component } from 'react';
import './sidebar.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UIForms from './../uiforms/uiforms';

class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTabId: 1
    }
    this.setActiveTab = this.setActiveTab.bind(this);
  }
  
  setActiveTab = (id) =>{
    // this.setState({ selectedTabId:id });
    this.props.handleTabIndex(id);
  }

  shouldComponentUpdate(a,b){
    console.log(a,b);
    return true;
  }



  render() {
    return (
      <div className="nav-side-menu">
        <div className="brand">Contents</div>
          <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
          <div className="menu-list">
            <ul id="menu-content" className="menu-content collapse out">
              <li className={ (this.props.tabIndex == 1) ? 'active': '' } onClick={()=>this.setActiveTab(1) }>
                <Link to="/app/dashboard"><i className="fa fa-dashboard fa-lg"></i> Dashboard</Link>
              </li>
              <li className={ (this.props.tabIndex == 2) ? 'active': '' } onClick={() => this.setActiveTab(2) }>
                <Link to="/app/forms" component={UIForms}><i className="fa fa-dashboard fa-lg"></i> Dynamic Forms</Link>
              </li>
              <li className={ (this.props.tabIndex == 3) ? 'active': '' } onClick={() => this.setActiveTab(3) } data-toggle="collapse" data-target="#products" className="collapsed">
                <a><i className="fa fa-gift fa-lg"></i> UI Elements <span className="arrow"></span></a>
              </li>
              <ul className="sub-menu collapse" id="products">
                  <li className="active"><a>CSS3 Animation</a></li>
                  <li><a>General</a></li>
                  <li><a>Buttons</a></li>
              </ul>
              <li className={ (this.props.tabIndex == 4) ? 'active': '' } onClick={() => this.setActiveTab(4) } data-toggle="collapse" data-target="#service" className="collapsed">
                <a><i className="fa fa-globe fa-lg"></i> Services <span className="arrow"></span></a>
              </li>  
              <ul className="sub-menu collapse" id="service">
                <li>New Service 1</li>
              </ul>
              <li className={ (this.props.tabIndex == 5) ? 'active': '' } onClick={() => this.setActiveTab(5) } data-toggle="collapse" data-target="#new" className="collapsed">
                <a><i className="fa fa-car fa-lg"></i> New <span className="arrow"></span></a>
              </li>
              <ul className="sub-menu collapse" id="new">
                <li>New New 1</li>
                <li>New New 2</li>
                <li>New New 3</li>
              </ul>
              <li className={ (this.props.tabIndex == 6) ? 'active': '' } onClick={() => this.setActiveTab(6) }>
                <a>
                <i className="fa fa-user fa-lg"></i> Created Forms
                </a>
                </li>
              <li className={ (this.props.tabIndex == 7) ? 'active': '' } onClick={() => this.setActiveTab(7) }>
                <a>
                <i className="fa fa-users fa-lg"></i> Users
                </a>
              </li>
            </ul>
          </div>
        </div>
    );
  }
}

export default Sidebar;
