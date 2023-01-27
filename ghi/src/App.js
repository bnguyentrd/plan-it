import "./App.css";
import { useState } from "react";
import MainPage from "./MainPage.js";
import SignUpForm from "./accounts/SignUpForm";
import { LoginForm } from "./accounts/LoginForm.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountDetails from "./accounts/AccountDetail.js";
import { About } from "./accounts/About.js";
import { AuthProvider } from "./accounts/Authentication";
import EventForm from "./events/eventForm";
import EventList from "./events/eventList";
import EventDetails from "./events/eventDetails.js";
import PollForm from "./polls/PollForm.js";
import PollList from "./polls/PollList.js";
import PollDetail from "./polls/PollDetail.js";
import ChoiceForm from "./polls/ChoiceCreate.js";
import { useToken } from './accounts/Authentication';
import UpdateEvent from "./events/updateEvent.js";


function GetToken() {
  useToken();
  return null;
}


function App(props) {
  const [account_id, setAccountId] = useState(0);
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, "");

  function GetToken() {
  useToken();
  return null;
}

  return (
    <>
      <div>
        <BrowserRouter basename={basename}>
          <AuthProvider>
            <GetToken />
            <Routes>
              <Route path="/" element={<MainPage accountid={account_id} />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/about" element={<About />} />
              <Route path="/api/protected" />
              <Route path="/api/accounts/:id" element={<AccountDetails />} />
              <Route path="/events" element={<EventList />} />
              <Route path="/create" element={<EventForm />} />
              <Route path="/details/:id" element={<EventDetails />} />
              <Route path="/update/:id" element={<UpdateEvent />} />
              <Route path="/questions/new" element={<PollForm />} />
              <Route path="/questions" element={<PollList />} />
              <Route path="/questions/:id" element={<PollDetail/>} />
              <Route path="/questions/:id/choice" element={<ChoiceForm/>} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
