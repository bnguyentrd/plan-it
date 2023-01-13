import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import SignUpForm from "./accounts/SignUpForm";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <button className="menu-button" onClick={toggleMenu}>
        Menu
      </button>
      {isMenuOpen && (
        <ul className="menu">
          <li className="nav-li">Home</li>
          <li className="nav-li">About</li>
          <li className="nav-li">Contact</li>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log in</NavLink>
          </li>
          <li>
            {/* <NavLink to="/accountdetails">Account Details</NavLink> */}
            <NavLink to="/api/accounts/{id}">Account Details</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Nav;
