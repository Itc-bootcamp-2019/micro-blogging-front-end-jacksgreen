import React from 'react';
import './style.css'

function NavBar() {
    return (
        <div className="navbar-wrapper">
            <div className="navbar-text">
                <div className="nav-text selected">Home</div>
                <div className="nav-text">Profile</div>
            </div>
        </div>
    )
}

export default NavBar