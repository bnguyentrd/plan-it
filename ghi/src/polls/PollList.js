import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';



const PollList = () => {
    const [question, setQuestions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8003/questions/')
            .then(response => response.json())
            .then(data => {
                setQuestions(data);
            })
            .catch(e => console.log('error: ', e));
    }, [])

    return (
      <>
        <h1>Current Polls</h1>
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Poll Title</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {question && question.map(q => {
                if (q.is_active === true) {
                    q['is_active'] = 'In Progress'
                } else if ( q.is_active === false ) {
                     q['is_active'] = 'Completed'
                }
                return (
                <tr key={q.id}>
                    <td>
                        <nav>
                            <Link to={`/questions/${q.id}`}>{q.title }</Link>
                        </nav>
                        </td>
                    <td>{q.is_active}</td>
                </tr>
                );
            })}
            </tbody>
        </table>
        <button onClick={() => window.location.href="http://localhost:3000/questions/new"}>Create New Poll</button>
      </>
    );
  }

  export default PollList;
