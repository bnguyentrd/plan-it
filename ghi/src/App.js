import { useEffect, useState } from "react";
import MainPage from "./MainPage.js";
// import ErrorNotification from "./ErrorNotification";
import "./App.css";
import SignUpForm from "./accounts/SignUpForm";
import { LoginForm } from "./accounts/LoginForm.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AccountDetails from './accounts/AccountDetails';
import EventForm from './events/eventForm.js';
import EventList from './events/eventList.js';


function App() {
  const [launch_info, setLaunchInfo] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      let url = `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/api/launch-details`;
      console.log("fastapi url: ", url);
      let response = await fetch(url);
      console.log("------- hello? -------");
      let data = await response.json();

      if (response.ok) {
        console.log("got launch data!");
        setLaunchInfo(data.launch_details);
      } else {
        console.log("drat! something happened");
        setError(data.message);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/events" element={<EventList />} />
          <Route path="create" element={<EventForm />} />
          {/* <Route path="/api/accounts/{id}" element={<AccountDetails />} /> */}
          {/* <Route path="/api/accounts/{id}" element={<AccountDetails />} /> */}
          {/* <ErrorNotification error={error} /> */}
          {/* <Construct info={launch_info} /> */}
          {/* <MainPage info={launch_info} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
