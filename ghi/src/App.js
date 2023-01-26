import "./App.css";
import { useEffect, useState } from "react";
import MainPage from "./MainPage.js";
import SignUpForm from "./accounts/SignUpForm";
import { LoginForm } from "./accounts/LoginForm.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountDetail from "./accounts/AccountDetail";
import { About } from "./accounts/About.js";
import { AuthProvider, useToken } from "./accounts/Authentication";
import EventForm from "./events/eventForm";
import EventList from "./events/eventList";
import EventDetails from "./events/eventDetails.js";
// import { useToken } from "./accounts/Authentication.js";
import PollForm from "./polls/PollForm.js";
import PollList from "./polls/PollList.js";

function GetToken() {
  useToken();
  return null;
}

// function App(props) {
function App() {
  // const [launch_info, setLaunchInfo] = useState([]);
  // const [error, setError] = useState(null);
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, "");

  return (
    <>
      <div>
        <BrowserRouter basename={basename}>
          <AuthProvider>
            {/* <AuthContext.Provider> */}
            <GetToken />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/api/accounts/:userId" element={<AccountDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/api/protected" />
              <Route path="/events" element={<EventList />} />
              <Route path="/create" element={<EventForm />} />
              <Route path="/details/:id" element={<EventDetails />} />
              <Route path="/questions/new" element={<PollForm />} />
              <Route path="/questions" element={<PollList />} />
            </Routes>
            {/* </AuthContext.Provider> */}
          </AuthProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
