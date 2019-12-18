import React from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/home" className="nav-text" id="homeButton" activeClassName='selected'>
            Home
          </NavLink>
          <NavLink to="/profile" className="nav-text" id="profileButton" activeClassName='selected'>
            Profile
          </NavLink>
        </div>
      </div>
    );
  }
}

export default NavBar;
