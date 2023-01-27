import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/Nav.css";
import { useToken } from "./accounts/Authentication";

function Nav(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logout = useToken()[2];
  const token = useToken()[0];

  const handleLogout = async (e) => {
    e.preventDefault();
    logout();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div>
        <button
          className={`navbtn container ${isMenuOpen ? "change" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>
        {isMenuOpen && (
          <ul className="drpdwn">
            <li className="item-1">
              <NavLink to="/">Home</NavLink>
            </li>
             <li className="item-2">
              <NavLink to="/about">About</NavLink>
            </li>

            <li className="item-1">Contact</li>
            {!token ? (
              <li className="item-2">
                {" "}
                <NavLink to="/signup">Sign Up</NavLink>{" "}
              </li>
            ) : null}
            {!token ? (
              <li className="item-1">
                {" "}
                <NavLink to="/login">Log in</NavLink>{" "}
              </li>
            ) : null}
            <li className="item-2">
              <NavLink to={`/api/accounts/${props.accountid}`}>
                Account Details
              </NavLink>
            </li>
            <li className="item-1">
              <NavLink to="/create">Create Event Form</NavLink>
            </li>
            <li className="item-2">
              <NavLink to="/events">Events</NavLink>
            </li>
            <div className="nav-sep"></div>
            {token ? ( <button className="item-logout" onClick={handleLogout} >Log Out</button> ) : null}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Nav;
