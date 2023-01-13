import React, { useState } from "react";
import { useAuthContext } from "./Authentication";
import { Container, Box, TextField, Button } from "@mui/material";
import { useToken } from "./Authentication";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, login] = useToken();
  const [error, setError] = useState("");
  // const { login } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(username, password);
    // if (error) {
    //   setError(error);
    // }
    e.preventDefault();
    alert("success");
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
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
            name="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
          />
          <Button variant="contained" onClick={handleSubmit}>
            Login
          </Button>
          <div>{error}</div>
        </Box>
      </Container>
    </>
  );
};
