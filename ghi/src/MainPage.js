import TextField from "@mui/material/TextField";

function MainPage(props) {
  const pad2 = (num) => String(num).padStart(2, "0");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Plan it</h1>
        <img
          src="https://w7.pngwing.com/pngs/193/999/png-transparent-business-plan-computer-icons-strategic-planning-business-text-trademark-people.png"
          height="200"
          width="200"
        />
        <h2>SLIDESHOW GOES HERE</h2>
        <button>button</button>
        <h2>CREATE EVENT FORM GOES HERE</h2>
        <TextField
          margin="normal"
          required
          // fullWidth
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
          // fullWidth
          name="password"
          label="Password"
          // value={password}
          // onChange={field}
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
      </header>
    </div>
  );
}

export default MainPage;
