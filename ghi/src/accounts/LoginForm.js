import React, { useState } from "react";
import { Container, Box, TextField, Button } from "@mui/material";
import { useToken } from "./Authentication";
import { useNavigate } from "react-router-dom";
import "../css/LoginForm.css";
import Nav from "../Nav";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const login = useToken()[1];
  console.log("THIS IS LOGIN: ", login);

  const handleSubmit = async (e) => {
    console.log("IN HANDLE SUBMIT");
    e.preventDefault();
    try {
      console.log("BEFORE LOGIN");
      login(username, password);
      navigate("/");
    } catch (error) {
      navigate("/error", { state: { message: "Failed to submit form" } });
    }
  };

  return (
    <>
      <Nav />
      <Container className="login-form" component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form className="login-form">
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
            type="submit"
          >
            Login
          </Button>
          <div>{error}</div>
          </form>
        </Box>
      </Container>
    </>
  );
};
