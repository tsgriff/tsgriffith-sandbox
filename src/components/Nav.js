import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Nav extends Component {

  render() {
    return (
      <nav className="navbar">
        <a className="nav-item" href="https://tsgriffith.com">Home</a>
        <Link className="nav-item" to="/">Finance</Link>
        <Link className="nav-item" to="/weather">Weather</Link>
        <Link className="nav-item" to="/sentiment-analysis">Sentiment Analysis</Link>
      </nav>
    );
  }
  
}

export default Nav;
