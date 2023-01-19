// 1/19
// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// // import { NavLink } from "react-router-dom";
// import SignUpForm from "./accounts/SignUpForm";
// import "./css/Nav.css";
// // import { useToken } from "./Authentication";
// import { useToken } from "./accounts/Authentication";
// import { useNavigate } from "react-router-dom";

// function Nav(props) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   // const [token, useToken] = useState();
//   const [currentUser, setCurrentUser] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [token, login] = useToken();
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   }, [token]);

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   token();

//   //   e.preventDefault();
//   // };

//   const logout = () => {
//     fetch(`${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/token`, {
//       method: "DELETE",
//       credentials: "include", // include cookies in the request
//     }).then(() => {
//       setCurrentUser(null);
//       setIsLoggedIn(false);
//       navigate("/");
//     });
//   };

//   // const login = () => {}

//   return (
//     <nav>
//       <div>
//         <button
//           className={`navbtn container ${isMenuOpen ? "change" : ""}`}
//           onClick={toggleMenu}
//         >
//           <div className="bar1"></div>
//           <div className="bar2"></div>
//           <div className="bar3"></div>
//         </button>
//         {isMenuOpen && (
//           <ul className="drpdwn">
//             <header className="neonText">Plan it</header>
//             <div className="breakbar"></div>
//             <li className="item-1">
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li className="item-2">
//               <NavLink to="/about">About</NavLink>
//             </li>
//             {/* <li>
//             <NavLink to="/api/protected">Protected</NavLink>
//           </li> */}
//             {/* <li className="nav-li">About</li> */}
//             <li className="item-1">Contact</li>
//             {/* <li className="item-2"> <NavLink to="/signup">Sign Up</NavLink> </li> */}
//             {!isLoggedIn ? (
//               <li>
//                 {" "}
//                 <NavLink to="/signup">Sign Up</NavLink>{" "}
//               </li>
//             ) : null}

//             {/* <li> <NavLink to="/login">Log in</NavLink> </li> */}
//             {!isLoggedIn ? (
//               <li className="item-1">
//                 {" "}
//                 <NavLink to="/login">Log in</NavLink>{" "}
//               </li>
//             ) : null}

//             <li className="item-2">
//               {/* <NavLink to="/accountdetails">Account Details</NavLink> */}
//               {/* <NavLink to="/api/accounts/me/token/">Account Details</NavLink> */}
//               {/* <NavLink to="/api/accounts/me/id/">Account Details</NavLink> */}
//               <NavLink to={`/api/accounts/${props.accountid}/`}>
//                 Account Details
//               </NavLink>
//             </li>
//             <li className="item-1">
//               <NavLink to="/create">Create Event Form</NavLink>
//             </li>

//             {isLoggedIn ? (
//               <li>
//                 {" "}
//                 <NavLink onClick={logout}>Logout</NavLink>
//               </li>
//             ) : null}
//           </ul>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Nav;
