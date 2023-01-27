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
            <header className="neonText">Plan it</header>
            <div className="breakbar"></div>
            <li className="item-1">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="item-2">
              <NavLink to="/about">About</NavLink>
            </li>

            <li className="item-1">Contact</li>
            {!token ? (
              <li>
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
            <li className="item-1">
              <NavLink to="/events">Events</NavLink>
            </li>
            <li className="item-2">
              <NavLink to="/questions">Polls</NavLink>
            </li>
            <li className="item-1">
              <NavLink to="/details">Event Details</NavLink>
            </li>

            {!token ? null : <NavLink onClick={handleLogout}>Logout</NavLink>}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Nav;
