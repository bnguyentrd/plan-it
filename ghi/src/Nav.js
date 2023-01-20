import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import SignUpForm from "./accounts/SignUpForm";
import "./css/Nav.css";
// import { useToken } from "./Authentication";
import { useToken } from "./accounts/Authentication";
import { useNavigate } from "react-router-dom";
// import axios from "axios";


function Nav(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [token, useToken] = useState();
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [token, logout] = useToken();
  const [token, login] = useToken();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    logout();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
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
      localStorage.removeItem("token");
      navigate("/");
    });
  };

//   const logout = async () => {
//     try {
//         await axios.delete(`${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/token`, {
//             withCredentials: true,
//         });
//         setCurrentUser(null);
//         setIsLoggedIn(false);
//         localStorage.removeItem("token");
//         navigate("/");
//     } catch (error) {
//         console.error(error);
//     }
// }








  // const login = () => {}

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
            {/* <li>
            <NavLink to="/api/protected">Protected</NavLink>
          </li> */}
            {/* <li className="nav-li">About</li> */}
            <li className="item-1">Contact</li>
            {/* <li className="item-2"> <NavLink to="/signup">Sign Up</NavLink> </li> */}
            {!isLoggedIn ? (
              <li>
                {" "}
                <NavLink to="/signup">Sign Up</NavLink>{" "}
              </li>
            ) : null}

            {/* <li> <NavLink to="/login">Log in</NavLink> </li> */}
            {!isLoggedIn ? (
              <li className="item-1">
                {" "}
                <NavLink to="/login">Log in</NavLink>{" "}
              </li>
            ) : null}

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

            {isLoggedIn ? (
              <li>
                {" "}
                <NavLink onClick={handleLogout}>Logout</NavLink>
              </li>
            ) : null}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Nav;

    // <BrowserRouter basename={basename}>
    //   <Routes>
    //     <Route path="/events" element={<EventList />} />
    //     <Route path="/create" element={<EventForm />} />
    //   </Routes>
    // </BrowserRouter>