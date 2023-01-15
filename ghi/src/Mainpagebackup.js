// 11:51 PM 1/13 code works with correct url id
// import React from "react";
// import logo from "./logo/logo.png";
// import Nav from "./Nav";
// import Slideshow from "./Slideshow";
// import { useState } from "react";
// // import "./css/DarkMode.css";
// // import { logout } from "./accounts."
// import { useToken } from "./accounts/Authentication";

// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuthContext, setToken } from "./accounts/Authentication";

// function MainPage(props) {
//   const navigate = useNavigate();
//   const { token, setToken } = useAuthContext();
//   const [tokens, logout] = useToken();

//   const handleLogout = async () => {
//     try {
//       await logout();
//       setToken(null);
//       console.log("TOKEN ACTUALLY GOT SET TO NULL");
//       localStorage.removeItem("token");
//       navigate("/");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // const toggleDarkMode = () => {
//   //   setDarkMode(!darkMode);
//   //   const toggleSwitch = document.querySelector(".toggle-switch");
//   //   toggleSwitch.classList.toggle("on");
//   // };

//   return (
//     <div>
//       <div className="top-right">
//         <Nav accountid={props.accountid} />
//         {/* <ProfilePicture /> */}
//       </div>
//       <div>
//         {/* <button className="button-transpar" onClick={toggleDarkMode}>
//           <input className="input" type="checkbox" id="checkbox" />
//           <label htmlFor="checkbox"></label>
//         </button> */}

//         {/* <button className="toggle-switch" onClick={toggleDarkMode}></button> */}
//         {/* {darkMode ? <p></p> : <p></p>} */}
//       </div>
//       <header className="App-header">
//         <br></br>
//         <h1>
//           <img className="logo-radius" src={logo} width="500" />
//         </h1>
//         <br></br>
//       </header>
//       <div>
//         <br></br>
//       </div>
//       <button onClick={handleLogout}>Logout</button>
//       <div>
//         <Slideshow
//           images={[
//             "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1200px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
//             "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
//             "https://dep.nj.gov/wp-content/uploads/njfw/fishing_freshwater_thumb.jpg",
//             "https://drugpolicy.org/sites/default/files/crowd-at-concert_0.png",
//           ]}
//           size={200}
//           duration={10000}
//         />
//       </div>
//       <div>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//       </div>
//       <div>
//         <h1>EVENT FORM HERE</h1>
//       </div>
//     </div>
//   );
// }

// export default MainPage;
