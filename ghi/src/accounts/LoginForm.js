import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import { useToken } from

function LogInForm(props) {
  // const [token, signup] = useToken();

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
          <h1>Log In</h1>
          <TextField
            margin="normal"
            required
            fullWidth
            name="username"
            label="Username"
            // value={username}
            // onChange={field}
            variant="outlined"
            autoFocus
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            // value={username}
            // onChange={field}
            variant="outlined"
            autoFocus
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            // value={username}
            // onChange={field}
            variant="outlined"
            autoFocus
          />
        </Box>
        <Button
          variant="contained"
          onClick={() => {
            alert("clicked");
          }}
        >
          Sign Up
        </Button>
      </Container>
    </>
  );
}

export default LogInForm;
