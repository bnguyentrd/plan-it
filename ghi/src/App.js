import "./App.css";
import { useEffect, useState } from "react";
import MainPage from "./MainPage.js";
import SignUpForm from "./accounts/SignUpForm";
import { LoginForm } from "./accounts/LoginForm.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountDetails from "./accounts/AccountDetail.js";
import { About } from "./accounts/About.js";
import { AuthProvider } from "./accounts/AuthenticationTEST";
import EventForm from "./events/eventForm";
import EventList from "./events/eventList";
import EventDetails from "./events/eventDetails.js";
import { useToken } from "./accounts/Authentication.js";

// function getToken() {
//   useToken();
//   return null;
// }

function App(props) {
  const [launch_info, setLaunchInfo] = useState([]);
  const [error, setError] = useState(null);
  const [account_id, setAccountId] = useState(0);
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, "");

  return (
    <>
      <div>
        <BrowserRouter basename={basename}>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<MainPage accountid={account_id} />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/about" element={<About />} />
              <Route path="/api/protected" />
              <Route path="/api/accounts/:id" element={<AccountDetails />} />
              {/* <Route
                path="/api/accounts/profile"
                element={<AccountDetails />}
              /> */}
              <Route path="/events" element={<EventList />} />
              <Route path="/create" element={<EventForm />} />
              <Route path="/details/:id" element={<EventDetails />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
