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
    <>
      <AuthProvider>
        <AuthContext.Consumer>
          {(context) => (
            <div>
              <BrowserRouter>
                <Routes>
                  <Route
                    path="/"
                    element={<MainPage accountid={account_id} />}
                  />
                  <Route path="/signup" element={<SignUpForm />} />
                  <Route path="/login" element={<LoginForm />} />
                  {/* <Route path="/about" /> */}
                  <Route path="/about" element={<About />} />
                  <Route path="/api/protected" />
                  <Route
                    path="/api/accounts/:id"
                    // path="/api/accounts/me/token"
                    element={<AccountDetails token={context.token} />}
                  />
                  <Route path="/events" element={<EventList />} />
                  <Route path="/create" element={<EventForm />} />
                  {/* <ErrorNotification error={error} /> */}
                  {/* <Construct info={launch_info} /> */}
                  {/* <MainPage info={launch_info} /> */}
                </Routes>
              </BrowserRouter>
            </div>
          )}
        </AuthContext.Consumer>
      </AuthProvider>
    </>
  );
}

export default App;
