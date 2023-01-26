// last updated 1/25
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MainPage from "../MainPage";
// import { getToken, getTokenInternal } from "./AuthenticationTEST";
import { useToken, getTokenInternal, useAuthContext } from "./Authentication";
import { logout } from "../MainPage";
import Nav from "../Nav";
import { useParams } from "react-router-dom";

function AccountDetails() {
  const [profilePicture, setProfilePicture] = useState(null);
  const [accountDetails, setAccountDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [updateUsername, setUpdateUsername] = useState();
  const [updateEmail, setUpdateEmail] = useState();
  const { token } = useAuthContext;
  // const accountId = useParams();
  // const id = Number(accountId.id);

  useEffect(() => {
    async function fetchAccountDetails() {
      const token = await getTokenInternal();
      if (!token) {
        navigate("/login");
      } else {
        const url = `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/api/accounts/${token.account.id}`;
        // const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/accounts/${token.account.id}`;
        try {
          const response = await fetch(url, {
            headers: {
              Authorization: `Bearer ${token.access_token}`,
            },
          });
          console.log(response);
          if (response.ok) {
            console.log("RECEIVED GOOD RESPONSE");
            const data = await response.json();
            setAccountDetails(data);
          } else {
            navigate("/");
          }
        } catch (e) {
          console.log(e);
        }
      }
    }
    fetchAccountDetails();
  }, [updateEmail, updateUsername]);

  const handleDelete = async (e) => {
    e.preventDefault();
    const token = await getTokenInternal();
    const url = `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/api/accounts/${token.account.id}`;
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (response.ok) {
      fetch(`${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/token`, {
        method: "DELETE",
        credentials: "include", // include cookies in the request
      });
      navigate("/");
    } else {
      console.log("testing to see if this code got hit");
      const error = await response.json();
      setError(error.message);
    }
  };

  const handleUpload = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleEmailUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url = `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/api/accounts/${token.account.id}/email`;
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        const data = await response.json();
        setAccountDetails(data);
        setUpdateEmail(email);
      } else {
        const error = await response.json();
        setError(error.message);
      }
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
    setLoading(false);
  };

  const handleUsernameUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = await getTokenInternal();
    // const url = `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/api/accounts/${token.account.id}/username`;
    const url = `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/api/accounts/username${id}`;
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.access_token}`,
        },
        body: JSON.stringify({ username }),
      });
      if (response.ok) {
        const data = await response.json();
        setAccountDetails(data);
        setUpdateUsername(username);
      } else {
        const error = await response.json();
        setError(error.message);
      }
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="account-detail-size">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (
          <>
            <Nav />
            <h1>Account Detail</h1>
            {/* <div>
              <h2>Profile Picture</h2>
              <input type="file" onChange={handleUpload} />
              <img
                src={profilePicture ? URL.createObjectURL(profilePicture) : ""}
                alt="profile"
              />
            </div> */}
            <div>
              <div>
                <h2>Email: {accountDetails.email}</h2>
                <form onSubmit={handleEmailUpdate}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit">Update Email</button>
                </form>
              </div>
              <div>
                <h2>Username: {accountDetails.username}</h2>
                <form onSubmit={handleUsernameUpdate}>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <button type="submit">Update Username</button>
                </form>
              </div>
            </div>
          </>
        )}
        <br></br>
        <button onClick={handleDelete}>Delete Account</button>
      </div>
    </>
  );
}

export default AccountDetails;
