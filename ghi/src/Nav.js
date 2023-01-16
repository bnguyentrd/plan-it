import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import SignUpForm from "./accounts/SignUpForm";
import { useToken } from "./accounts/Authentication";

function Nav(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [token, useToken] = useState();
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, login] = useToken();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   token();

  //   e.preventDefault();
  // };

  const logout = () => {
    fetch(`${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/token`, {
      method: "DELETE",
      credentials: "include", // include cookies in the request
    }).then(() => {
      setCurrentUser(null);
      setIsLoggedIn(false);
    });
  };

  // const login = () => {}

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
          {/* <li> <NavLink to="/login">Log in</NavLink> </li> */}
          {!isLoggedIn ? (
            <li>
              {" "}
              <NavLink to="/login">Log in</NavLink>{" "}
            </li>
          ) : null}

          <li>
            {/* <NavLink to="/accountdetails">Account Details</NavLink> */}
            {/* <NavLink to="/api/accounts/me/token/">Account Details</NavLink> */}
            {/* <NavLink to="/api/accounts/me/id/">Account Details</NavLink> */}
            <NavLink to={`/api/accounts/${props.accountid}/`}>
              Account Details
            </NavLink>
          </li>

          {isLoggedIn ? (
            <li>
              {" "}
              <NavLink onClick={logout}>Logout</NavLink>{" "}
            </li>
          ) : null}
        </ul>
      )}
    </nav>
  );
}

export default Nav;
