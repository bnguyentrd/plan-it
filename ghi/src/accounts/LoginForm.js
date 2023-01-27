import React, { useState } from "react";
import { Container, Box, TextField, Button } from "@mui/material";
import { useAuthContext } from "./AuthenticationTEST";
import "../css/LoginForm.css";


export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoggedIn } = useAuthContext();
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    login(username, password);
  };


  return (
    <>
      <Container className="login-form" component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Login</h1>
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
            input
            type="password"
            name="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
          />
          <br></br>
          <Button
            className="glow-on-hover glowing glow-button"
            onClick={handleSubmit}
          >
            Login
          </Button>
          <div>{error}</div>
          {isLoggedIn ? <div>You are logged in</div> : null}
        </Box>
      </Container>
    </>
  );
};
