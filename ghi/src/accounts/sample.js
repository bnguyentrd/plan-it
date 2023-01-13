  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      if (data.token) {
        // store token in session
        sessionStorage.setItem("token", data.token);
        // redirect to protected route
        window.location.replace("/");
      } else {
        setError("Incorrect username or password");
      }
    } catch (error) {
      setError(error.message);
    }
  };





//   sign up working

//   import { useState } from "react";
// import { Container, Box, TextField, Button } from "@mui/material";

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

//     // if (!response.ok) {
//     //   // Handle error response
//     //   const error = await response.json();
//     //   console.log(error);
//     // } else {
//     //   const data = await response.json();
//     //   console.log(data);
//     // }

//     if (response.ok) {
//       const data = await response.json();
//       console.log(data);
//       // Handle error response
//     } else {
//       const error = await response.json();
//       console.log(error);
//     }

//     // Handle successful response
//   }

//   return (
//     <>
//       <Container component="main" maxWidth="xs">
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
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
//           <Button variant="contained" onClick={handleSubmit}>
//             Sign Up
//           </Button>
//         </Box>
//       </Container>
//     </>
//   );
// }

// export default SignUpForm;