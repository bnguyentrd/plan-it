// import "bootstrap/dist/css/bootstrap.min.css"
// import Button from "react-bootstrap/Button";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// test
// import TextField from "@mui/material/TextField";
// function MainPage(props) {
//   const pad2 = (num) => String(num).padStart(2, "0");

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Plan it</h1>
//         <img
//           src="https://w7.pngwing.com/pngs/193/999/png-transparent-business-plan-computer-icons-strategic-planning-business-text-trademark-people.png"
//           height="200"
//           width="200"
//         />
//         <h2>SLIDESHOW GOES HERE</h2>
//         <button>button</button>
//         <h2>CREATE EVENT FORM GOES HERE</h2>
//         <TextField
//           margin="normal"
//           required
//           // fullWidth
//           name="username"
//           label="Username"
//           // value={username}
//           // onChange={field}
//           variant="outlined"
//           autoFocus
//         />

//         <TextField
//           margin="normal"
//           required
//           // fullWidth
//           name="password"
//           label="Password"
//           // value={password}
//           // onChange={field}
//           type="password"
//           autoComplete="current-password"
//           variant="outlined"
//         />
//       </header>
//     </div>
//   );
// }
// export default MainPage;
//divider#############################################################################

// import React from "react";
// import logo from "./logo/logo.png";
// import Nav from "./Nav";
// import Slideshow from "./Slideshow";
// import "./css/Slideshow.css";

// function MainPage(props) {
//   const pad2 = (num) => String(num).padStart(2, "0");

//   return (
//     <div className="App">
//       <div className="top-right">
//         <Nav />
//       </div>
//       <header className="App-header">
//         <h1>
//           <img className="logo-radius" src={logo} width="500" />
//         </h1>
//       </header>
//       <div>
//         <br></br>
//       </div>
//       <div className="container">
//         <Slideshow
//           images={[
//             "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1200px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
//             "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
//             "https://dep.nj.gov/wp-content/uploads/njfw/fishing_freshwater_thumb.jpg",
//             "https://drugpolicy.org/sites/default/files/crowd-at-concert_0.png",
//           ]}
//           size={500}
//           duration={10000}
//         />
//       </div>
//         <br></br>
//       <div>
//         <h1>EVENT FORM HERE</h1>
//       </div>
//     </div>
//   );
// }

// export default MainPage;

import React from "react";
import logo from "./logo/logo.png";
import Nav from "./Nav";
// import Slideshow from "./Slideshow";
// import "./css/Slideshow.css";

function MainPage(props) {
  const pad2 = (num) => String(num).padStart(2, "0");

    return (
        <div className="App">
            <div className="top-right">
                <Nav />
            </div>
            <header className="App-header">
                <h1>
                    <img className="logo-radius" src={logo} width="500" />
                </h1>
            </header>
            <div>
                <br></br>
            </div>
            <div className="container">
                <Slideshow images={[
                'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1200px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg',
                'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
                'https://dep.nj.gov/wp-content/uploads/njfw/fishing_freshwater_thumb.jpg',
                'https://drugpolicy.org/sites/default/files/crowd-at-concert_0.png',
                
            ]} 
            size={500}
            duration={10000}
            />
            </div>
          </section>
        </div>
        <br></br>
        <div>
          <h1>EVENT FORM HERE</h1>
        </div>
        {/* <Button>This is a button</Button> */}
      </div>
    </>
  );
}

export default MainPage;
