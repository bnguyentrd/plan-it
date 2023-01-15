import { useEffect, useState } from "react";
import Construct from "./Construct.js";
import MainPage from "./MainPage.js";
import ErrorNotification from "./ErrorNotification";
import "./App.css";
import SignUpForm from "./accounts/SignUpForm";
import { LoginForm } from "./accounts/LoginForm.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountDetails from "./accounts/AccountDetail.js";
import { About } from "./accounts/About.js";
import { AuthProvider, AuthContext } from "./accounts/Authentication";

function App(props) {
  const [launch_info, setLaunchInfo] = useState([]);
  const [error, setError] = useState(null);
  const [account_id, setAccountId] = useState(0);

  async function getAccount() {
    // console.log("TEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEST");
    const url = `http://localhost:8000/token`;
    const response = await fetch(url, {
      credentials: "include",
    });
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      let id = data.account.id;
      // console.log(data.account.id);
      setAccountId(id);
      return id;
    }
  }

  // console.log(getAccount());

  useEffect(() => {
    // async function getData() {
    //   let url = `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/api/launch-details`;
    //   console.log("fastapi url: ", url);
    //   let response = await fetch(url);
    //   console.log("------- hello? -------");
    //   let data = await response.json();

    //   if (response.ok) {
    //     console.log("got launch data!");
    //     setLaunchInfo(data.launch_details);
    //   } else {
    //     // console.log("drat! something happened");
    //     setError(data.message);
    //   }
    // }
    // getData();
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
