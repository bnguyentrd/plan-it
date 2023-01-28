import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/SignUp.css";
import { Navigate, useNavigate } from "react-router-dom";

const PollList = () => {
  let navigate = useNavigate();

  async function handleNav(event) {
    event.preventDefault();
    navigate("/");
  }

  async function handleNavPoll(event) {
    event.preventDefault();
    navigate("/questions/new");
  }
  const [question, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_POLLS_API_HOST}/questions`)
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
      })
      .catch((e) => console.log("error: ", e));
  }, []);

  return (
    <>
      <header>
        <div>
          <button onClick={handleNav}>Back to Home</button>
        </div>
      </header>
      <h1>Current Polls</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Poll Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {question &&
            question.map((q) => {
              if (q.is_active === true) {
                q["is_active"] = "In Progress";
              } else if (q.is_active === false) {
                q["is_active"] = "Completed";
              }
              return (
                <tr key={q.id}>
                  <td>
                    <nav>
                      <Link to={`/questions/${q.id}`}>{q.title}</Link>
                    </nav>
                  </td>
                  <td>{q.is_active}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <button onClick={handleNavPoll}>Create New Poll</button>
      <div></div>
      <div></div>
    </>
  );
};

export default PollList;
