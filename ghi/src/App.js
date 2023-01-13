import { useEffect, useState } from 'react';
import Construct from './Construct.js'
import ErrorNotification from './ErrorNotification';
import './App.css';
// import Nav from './Nav';
import EventForm from './events/eventForm.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventList from './events/eventList.js';


const domain = /https:\/\/[^/]+/
const basename = process.env.PUBLIC_URL.replace(domain, '')


function App() {
  const [launch_info, setLaunchInfo] = useState([]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function getData() {
  //     let url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/launch-details`;
  //     console.log('fastapi url: ', url);
  //     let response = await fetch(url);
  //     console.log("------- hello? -------");
  //     let data = await response.json();

  //     if (response.ok) {
  //       console.log("got launch data!");
  //       setLaunchInfo(data.launch_details);
  //     } else {
  //       console.log("drat! something happened");
  //       setError(data.message);
  //     }
  //   }
  //   getData();
  // }, [])


  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/events" element={<EventList />} />
        <Route path="/create" element={<EventForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
