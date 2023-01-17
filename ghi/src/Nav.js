import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import SignUpForm from "./accounts/SignUpForm";
import './css/Nav.css';
// import { useToken } from "./Authentication";

function Nav(props) {
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
      <div>
      <button className={`navbtn container ${isMenuOpen ? "change" : ""}`} onClick={toggleMenu}>
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
      </button>
      {isMenuOpen && (
        <ul className="drpdwn">
          <li className="item-1">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="item-2">
            <NavLink to="/about">About</NavLink>
          </li>
          {/* <li>
            <NavLink to="/api/protected">Protected</NavLink>
          </li> */}
          {/* <li className="nav-li">About</li> */}
          <li className="item-1">Contact</li>
          <li className="item-2">
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
          <li className="item-1">
            <NavLink to="/login">Log in</NavLink>
          </li>
          <li className="item-2">
            {/* <NavLink to="/accountdetails">Account Details</NavLink> */}
            {/* <NavLink to="/api/accounts/me/token/">Account Details</NavLink> */}
            {/* <NavLink to="/api/accounts/me/id/">Account Details</NavLink> */}
            <NavLink to={`/api/accounts/${props.accountid}/`}>
              Account Details
            </NavLink>
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

