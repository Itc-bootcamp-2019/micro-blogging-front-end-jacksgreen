import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="navbar-wrapper">
        <div className="navbar-text">
          <Link
            to="/"
            className="nav-text selected"
            id='homeButton'
          >
            Home
          </Link>
          <Link 
          to="/profile" 
          className="nav-text"
          id='profileButton'
          >
            Profile
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
