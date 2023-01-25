// 1/24
// import { useState } from "react";
// import { Container, Box, TextField, Button } from "@mui/material";
// import "../css/SignUp.css";
// import Nav from "../Nav";

// // import "../css/SignUp.css";

// function SignUpForm() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");

//   async function handleSubmit(event) {
//     event.preventDefault();

//     const url = "http://localhost:8000/api/accounts/new";
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username,
//         password,
//         email,
//       }),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       console.log(data);
//       // Handle error response
//     } else {
//       const error = await response.json();
//       console.log(error);
//     }
//   }

//   return (
//     <div className="signup-form-size">
//       <div className="signup-form-location" component="main" maxWidth="xs">
//         <Nav />
//         <Box
//           sx={{
//             // marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             // alignItems: "center",
//             // marginBottom: 27
//           }}
//         >
//           <h1>Sign Up</h1>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="username"
//             label="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             variant="outlined"
//             autoFocus
//           />

//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="email"
//             label="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             variant="outlined"
//             autoFocus
//           />

//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             variant="outlined"
//             autoFocus
//           />
//           {/* <Button variant="contained" onClick={handleSubmit}>
//           Sign Up
//         </Button> */}
//           <br></br>
//           <div>
//             <button
//               className="glow-on-hover glowing glow-button"
//               onClick={handleSubmit}
//             >
//               Sign Up
//             </button>
//           </div>
//         </Box>
//       </div>
//     </div>
//   );
// }

// export default SignUpForm;
