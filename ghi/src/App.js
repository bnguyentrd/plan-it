import { useEffect, useState } from "react";
import MainPage from "./MainPage.js";
// import ErrorNotification from "./ErrorNotification";
import "./App.css";
import SignUpForm from "./accounts/SignUpForm";
import { LoginForm } from "./accounts/LoginForm.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountDetails from "./accounts/AccountDetail.js";
import { About } from "./accounts/About.js";
import { AuthProvider, AuthContext } from "./accounts/Authentication";
import EventForm from './events/eventForm';
import EventList from './events/eventList';
import EventDetails from "./events/eventDetails.js";

function App(props) {
  const [launch_info, setLaunchInfo] = useState([]);
  const [error, setError] = useState(null);
  const [account_id, setAccountId] = useState(0);

  async function getAccount() {
    const url = `http://localhost:8000/token`;
    const response = await fetch(url, {
      credentials: "include",
    });
    if (response.ok) {
      const data = await response.json();
      let id = data.account.id;
      setAccountId(id);
      return id;
    }
  }


  useEffect(() => {
    getAccount();
  }, []);

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
