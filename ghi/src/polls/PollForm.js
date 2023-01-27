import { useState } from "react";
import { Container, Box, TextField, Button } from "@mui/material";
import "../css/SignUp.css";
import Nav from "../Nav";
import { Navigate, useNavigate } from "react-router-dom";

// import "../css/SignUp.css";

function PollForm() {
  const [question_text, setQuestion] = useState("");
  const [title, setTitle] = useState("");
   let navigate = useNavigate();

    async function handleNav(event) {
    event.preventDefault();
    navigate("/questions")
    }

  async function handleSubmit(event) {
    event.preventDefault();

    const url = `${process.env.REACT_APP_POLLS_SERVICE_API_HOST}/questions`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question_text,
        title


      }),
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
      navigate("/questions")

      // Handle error response
    } else {
      const error = await response.json();
      console.log(error);
    }

    // Handle successful response
  }

  return (
    <>
    <header>
            <div>
            <button onClick={handleNav}>Back to Poll List</button>
        </div>
        </header>
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
          <h1>Create Poll</h1>
          <TextField
            margin="normal"
            required
            fullWidth
            name="title"
            label="Poll Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            variant="outlined"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="question_text"
            label="Poll Question"
            value={question_text}
            onChange={(e) => setQuestion(e.target.value)}
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
              Create New Poll
            </button>
          </div>
        </Box>
      </div>
    </div>
    </>
  );
}

export default PollForm;
