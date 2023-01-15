import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import SignUpForm from "./accounts/SignUpForm";
import { NavLink } from 'react-router-dom';
import './css/Nav.css';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav>
      <div>
        <button className="navbtn" onClick={toggleMenu}>Menu</button>
        {isMenuOpen && (
          <ul className="drpdwn">
            <li className="item-1">
            <NavLink to="/">Home Page</NavLink>
            </li>
            <li className="item-2">About</li>
            <li className="item-1">Contact</li>
              <li className="item-2">
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
              <li className="item-1">
                <NavLink to="/login">Log In</NavLink>
              </li>
              <li className="item-2">
                <NavLink to="/accountdetails">Account Details</NavLink>
              </li>
              <li className="item-1">
                <NavLink to="/create">Create Event Form</NavLink>
              </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Nav;

