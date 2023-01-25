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

  return (
    <>
      <AuthProvider>
        <AuthContext.Consumer>
          {(context) => (
            <div>
              <BrowserRouter>
              {/* <BrowserRouter basename={basename}></BrowserRouter> */}
                <Routes>
                  <Route
                    path="/"
                    element={<MainPage  />}
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
                  <Route path="/details/:id" element={<EventDetails />} />
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
