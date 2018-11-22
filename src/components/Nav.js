import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <a className="nav-item" href="https://financialprogrammer.com">Blog</a>
        <a className="nav-item" href="https://financialprogrammer.com/resources">Resources</a>
      </nav>
    );
  }
}

export default Nav;
