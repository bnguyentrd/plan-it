// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// // import { NavLink } from "react-router-dom";
// import SignUpForm from "./accounts/SignUpForm";
// import "./css/Nav.css";
// // import { useToken } from "./Authentication";
// import { useAuthContext, useToken } from "./accounts/Authentication";
// import { useNavigate } from "react-router-dom";
// // import { ErrorBoundary } from "react-error-boundary";

// function Nav(props) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);
//   const logout = useToken()[2];
//   const token = useToken()[0];

//   const handleLogout = async (e) => {
//     console.log("HANDLE LOGOUT");
//     e.preventDefault();
//     logout();
//     // navigate("/");
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

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
//             {/* {!token ? (
//               <li>
//                 {" "}
//                 <NavLink to="/signup">Sign Up</NavLink>{" "}
//               </li>
//             ) : null} */}

//             {/* <li> <NavLink to="/login">Log in</NavLink> </li> */}
//             {/* {!token ? (
//               <li className="item-1">
//                 {" "}
//                 <NavLink to="/login">Log in</NavLink>{" "}
//               </li>
//             ) : null} */}

//             <li className="item-2">
//               {/* <NavLink to="/accountdetails">Account Details</NavLink> */}
//               {/* <NavLink to="/api/accounts/me/token/">Account Details</NavLink> */}
//               {/* <NavLink to="/api/accounts/me/id/">Account Details</NavLink> */}
//               <NavLink to={`/api/accounts/${props.accountid}`}>
//                 Account Details
//               </NavLink>
//             </li>
//             <li className="item-1">
//               <NavLink to="/create">Create Event Form</NavLink>
//             </li>
//             <li className="item-1">
//               <NavLink to="/events">Events</NavLink>
//             </li>
//             <li className="item-1">
//               <NavLink to="/details">Event Details</NavLink>
//             </li>

//             {/* {token ? (
//               <li>
//                 {" "}
//                 <NavLink onClick={handleLogout}>Logout</NavLink>{" "}
//               </li>
//             ) : null} */}

//             {/* <li>
//               <NavLink onClick={handleLogout}>Logout</NavLink>
//             </li> */}

//             {!token ? null : <NavLink onClick={handleLogout}>Logout</NavLink>}
//           </ul>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Nav;
