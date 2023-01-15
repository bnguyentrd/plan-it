import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import SignUpForm from "./accounts/SignUpForm";
// import { useToken } from "./Authentication";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [token, useToken] = useState();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   token();

  //   e.preventDefault();
  // };

  return (
    <nav>
      <button className="menu-button" onClick={toggleMenu}>
        Menu
      </button>
      {isMenuOpen && (
        <ul className="menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/api/protected">Protected</NavLink>
          </li>

          {/* <li className="nav-li">About</li> */}
          <li className="nav-li">Contact</li>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log in</NavLink>
          </li>
          <li>
            {/* <NavLink to="/accountdetails">Account Details</NavLink> */}
            {/* <NavLink to="/api/accounts/me/token/">Account Details</NavLink> */}
            {/* <NavLink to="/api/accounts/me/id/">Account Details</NavLink> */}
            <NavLink to="/api/accounts/{id}/">Account Details</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Nav;
