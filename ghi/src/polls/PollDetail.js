import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../css/SignUp.css";

const PollDetail = () => {
    const [question, setQuestion] = useState([]);
    const { id } = useParams();
    const [choices, setChoices] = useState([]);

    async function handleVote(choice_id) {

    const url = `http://localhost:8003/choices/${choice_id}/vote`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",}

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
      await fetchData();

      // Handle error response
    } else {
      const error = await response.json();
      console.log(error);
    }

    // Handle successful response
  }
  const fetchData = async () => {
    const questionResponse = await fetch(`http://localhost:8003/questions/${id}`);
    const questionData = await questionResponse.json();
    setQuestion(questionData);

    const choicesResponse = await fetch(`http://localhost:8003/choices`);
    const choicesData = await choicesResponse.json();
    setChoices(choicesData);
}

useEffect(() => {
    fetchData();
}, []);
    if (question.is_active === true) {
        question['is_active'] = 'In Progress'
    } else if ( question.is_active === false ) {
        question['is_active'] = 'Completed'
        }
let pollchoice = []
for (let choice in choices) {
    if (choices[choice].question_id === question.id) {
        pollchoice.push(choices[choice])
    }
}

    return (
        <>
        <header>
            <div>
            <button onClick={() => window.location.href="http://localhost:3000/questions"}>Back Poll List</button>
        </div>
        </header>
        <div>
        <h1>
            {question.title}
        </h1>
        <h2>
        {question.question_text}
        </h2>
        <h3>
        Status: {question.is_active}
        </h3>
        <div>
        <table className="table table-striped">.
        <thead>
            <tr>
            <th>Choices</th>
            <th>Votes</th>
            <th>Vote Here!</th>
            </tr>
        </thead>
        <tbody>
        {pollchoice && pollchoice.map(choice => {


            return(
            <tr key={choice.id}>
                <td>{choice.choice_text}</td>
                <td>{choice.votes}</td>
                <td>
                    <input class='myclass' type='button' value='Vote' onClick={() => handleVote(choice.id)}/></td>
            </tr>

            )
        })  }
        </tbody>
        </table>
        </div>
        <button onClick={() => window.location.href=`http://localhost:3000/questions/${id}/choice`}>Create a Choice for this Poll</button>
        </div>
        </>
    )
}
export default PollDetail;
