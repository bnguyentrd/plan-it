import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";




function SignUpForm() {
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
        </Box>
        <Button>Submit</Button>
      </Container>
    </>
  );
}

export default SignUpForm;
