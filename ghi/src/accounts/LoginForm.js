import React, { useState, useEffect, navigate } from "react";
import { useAuthContext } from "./Authentication";
import { Container, Box, TextField, Button } from "@mui/material";
import { useToken } from "./Authentication";
import "../css/LoginForm.css";


export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, login] = useToken();
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(username, password);
  };

  // issue: when logged out, the logged in message still displays
  // unless I hard refresh the page
  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);

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
