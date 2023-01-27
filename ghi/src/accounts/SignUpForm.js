import { useState } from "react";
import { Box, TextField } from "@mui/material";
import "../css/SignUp.css";
import Nav from "../Nav";
import { useToken } from "./Authentication";
import { useNavigate } from "react-router-dom";


function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const signup = useToken()[3];
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      signup(username, email, password);
      console.log("Signup Successful!");
      navigate("/");
    } catch (error) {
      console.log("Signup Error: ", error);
    }
  }

  return (
    <div className="signup-form-size">
      <div className="signup-form-location" component="main" maxWidth="xs">
        <Nav />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <form className="signup-form">
          <h1>Sign Up</h1>
          <TextField
            margin="normal"
            required
            fullWidth
            name="username"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variant="outlined"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            type="password"
            name="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            autoFocus
          />
          <br></br>
          <div>
            <button
              className="glow-on-hover glowing glow-button"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
          </form>
        </Box>
      </div>
    </div>
  );
}

export default SignUpForm;
