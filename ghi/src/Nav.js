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
      <button onClick={toggleMenu}>Menu</button>
      {isMenuOpen && (
        <ul>
          <li>Profile</li>
          <NavLink to="/">Home Page</NavLink>
          <li>About</li>
          <li>Contact</li>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
            <li>
              <NavLink to="/login">Log In</NavLink>
            </li>
            <li>
              <NavLink to="/accountdetails">Account Details</NavLink>
            </li>
        </ul>
      )}
    </nav>
  );
}

export default Nav;

