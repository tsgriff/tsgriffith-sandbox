import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

class Nav extends Component {

  render() {
    return (
      <nav className="navbar">
        <a className="nav-item" href="https://tsgriffith.com">Home</a>
        <a className="nav-item" href="http://blog.tsgriffith.com">Blog</a>
      </nav>
    );
  }
  
}

export default Nav;
