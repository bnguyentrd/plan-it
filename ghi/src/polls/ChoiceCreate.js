
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Box, TextField, Button } from "@mui/material";
import "../css/SignUp.css";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav";

// import "../css/SignUp.css";

function ChoiceForm() {
    const { id } = useParams();
  const [choice_text, setChoice] = useState("");
  let navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const url = `http://localhost:8003/questions/${ id }/choice`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        choice_text,
        "votes": 0}
        ),
    });

    // if (!response.ok) {
    //   // Handle error response
    //   const error = await response.json();
    //   console.log(error);
    // } else {
    //   const data = await response.json();
    //   console.log(data);
    // }

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      navigate(`/questions/${ id }`)

      // Handle error response
    } else {
      const error = await response.json();
      console.log(error);
    }

    // Handle successful response
  }

  return (
    <>
    <header><div>
            <button onClick={() => window.location.href="http://localhost:3000/questions"}>Back to Poll List</button>
        </div></header>

    <div className="signup-form-size">
      <div className="signup-form-location" component="main" maxWidth="xs">
        <Nav />
        <Box
          sx={{
            // marginTop: 8,
            display: "flex",
            flexDirection: "column",
            //alignItems: "center",
            // marginBottom: 27
          }}
        >
          <h1>Create a Choice</h1>
          <TextField
            margin="normal"
            required
            fullWidth
            name="choice_text"
            label="Choice Text Here"
            value={choice_text}
            onChange={(e) => setChoice(e.target.value)}
            variant="outlined"
            autoFocus
          />

          {/* <Button variant="contained" onClick={handleSubmit}>
          Sign Up
        </Button> */}
          <br></br>
          <div>
            <button
              className="glow-on-hover glowing glow-button"
              onClick={handleSubmit}
            >
              Create Choice
            </button>
          </div>
        </Box>
      </div>
    </div>
    </>
  );
}

export default ChoiceForm;
