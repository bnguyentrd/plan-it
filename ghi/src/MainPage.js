import React from "react";
import logo from "./logo/logo.png";
import Nav from "./Nav";
import Slideshow from "./Slideshow";
import { useState } from "react";
// import "./css/DarkMode.css";
// import { logout } from "./accounts."
import { useToken } from "./accounts/Authentication";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext, setToken } from "./accounts/Authentication";

function MainPage(props) {
  const navigate = useNavigate();
  // const { token, setToken } = useAuthContext();
  const [currentUser, setCurrentUser] = useState(null);

  const logout = () => {
    fetch(`${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/token`, {
      method: "DELETE",
      credentials: "include", // include cookies in the request
    }).then(() => {
      setCurrentUser(null);
    });
  };

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  //   const toggleSwitch = document.querySelector(".toggle-switch");
  //   toggleSwitch.classList.toggle("on");
  // };

  return (
    <div>
      <div className="top-right">
        <Nav accountid={props.accountid} />
        {/* <ProfilePicture /> */}
      </div>
      <div>
        {/* <button className="button-transpar" onClick={toggleDarkMode}>
          <input className="input" type="checkbox" id="checkbox" />
          <label htmlFor="checkbox"></label>
        </button> */}

        {/* <button className="toggle-switch" onClick={toggleDarkMode}></button> */}
        {/* {darkMode ? <p></p> : <p></p>} */}
      </div>
      <header className="App-header">
        <br></br>
        <h1>
          <img className="logo-radius" src={logo} width="500" />
        </h1>
        <br></br>
      </header>
      <div>
        <br></br>
        <div>
          {currentUser ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <div>You are not logged in</div>
          )} */}
        </div>
            <EventForm />
            <div>
                <h1 className="footer-1">Plan it</h1>
            </div>
        </div>
    )
        }

export default MainPage;

