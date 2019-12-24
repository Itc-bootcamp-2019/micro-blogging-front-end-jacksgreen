import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='navbar-wrapper'>
        <div className='navbar-text'>
          <NavLink
            to={this.props.isSignedIn && '/'}
            className='nav-text'
            id='homeButton'
            activeClassName='selected'
            exact={true}
          >
            Home
          </NavLink>
          <NavLink
            to={this.props.isSignedIn && '/profile'}
            className='nav-text'
            id='profileButton'
            activeClassName='selected'
          >
            Profile
          </NavLink>
        </div>
        <NavLink
          to='/login'
          className='nav-text'
          id='loginButton'
          activeClassName='selected'
        >
          Login
        </NavLink>
      </div>
    );
  }
}

export default NavBar;
