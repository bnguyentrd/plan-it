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
//   // const { token, setToken } = useAuthContext();
//   const [currentUser, setCurrentUser] = useState(null);

//   const logout = () => {
//     fetch(`${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/token`, {
//       method: "DELETE",
//       credentials: "include", // include cookies in the request
//     }).then(() => {
//       setCurrentUser(null);
//     });
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
//         <div>
//           {currentUser ? (
//             <button onClick={logout}>Logout</button>
//           ) : (
//             <div>You are not logged in</div>
//           )}
//         </div>
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
//         <h1>EVENT FORM HERE</h1>
//     </div>
//   );
// }

// export default MainPage;

import React from 'react';
import logo from './logo/logo.png';
import Nav from './Nav';
import Slideshow from './Slideshow';
import { useState } from 'react';
import './css/DarkMode.css';
// import ProfilePicture from './ProfilePicture';
import EventForm from './EventForm';



function MainPage() {

    const [darkMode, setDarkMode] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    
  const logout = () => {
    fetch(`${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/token`, {
      method: "DELETE",
      credentials: "include", // include cookies in the request
    }).then(() => {
      setCurrentUser(null);
    });
  };


    const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    }

    return (
        <div className={darkMode ? "dark-mode" : "" }>
            <div className="top-right">
                <Nav />
            </div>
            {/* <ProfilePicture /> */}
            <div>
            <button className="button-transpar" onClick={toggleDarkMode}>
                <input className="input" type="checkbox" id="checkbox" />
                <label htmlFor="checkbox"></label>
            </button>
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
                <Slideshow images={[
                'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1200px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg',
                'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
                'https://dep.nj.gov/wp-content/uploads/njfw/fishing_freshwater_thumb.jpg',
                'https://drugpolicy.org/sites/default/files/crowd-at-concert_0.png',
                'https://static.stacker.com/s3fs-public/styles/sar_screen_maximum_large/s3/croppedshutterstock741884605O3SDjpg_773.JPEG',
                'https://howtostartanllc.com/images/business-ideas/business-idea-images/fine-dining.jpg',
                'https://luccastyle.com/wp-content/uploads/2022/10/pg-fine-dining-1641394981-1080x630.jpg',
                'https://www.perrygroup.com/wp-content/uploads/2016/02/shutterstock_287171675.jpg',
                'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F164e49da-ec60-448d-b398-ca04eb5bf0fc.jpg?fit=scale-down&source=next&width=700'
                
            ]} 
            size={400}
            duration={10000}
            />
            </div>
            <div>
                {currentUser ? (
                <button onClick={logout}>Logout</button>
                ) : (
            <div>You are not logged in</div>
          )}
        </div>
            <EventForm />
            <div>
                <h1 className="footer-1">Plan it</h1>
            </div>
        </div>
    )
        }

export default MainPage;