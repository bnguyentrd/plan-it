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


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/create" element={<EventForm />} />
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
