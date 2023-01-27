// last updated 1/18  3:24 PM
import React, { useState, useEffect, useContext } from "react";
// import React, { useState, useEffect, useContext, useReducer } from "react";1
import { useNavigate } from "react-router-dom";
import { getToken, getTokenInternal } from "./AuthenticationTEST";
import { useToken } from "./Authentication";
import Nav from "../Nav";

function AccountDetails() {
  const [accountDetails, setAccountDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, update] = useToken();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [updateUsername, setUpdateUsername] = useState(false);
  const [updateEmail, setUpdateEmail] = useState(false);
  // const [file, setFile] = useState(null);
  // const [fileUrl, setFileUrl] = useState(null);

  useEffect(() => {
    async function fetchAccountDetails() {
      const token = await getTokenInternal();
      if (!token) {
        navigate("/login");
      } else {
        console.log("PASSED TOKEN CHECK");
        const url = `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/api/accounts/${token.account.id}`;
        console.log("HERE IS THE TOKEN ID:", token.account.id);
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
  }, [updateEmail]);



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
        credentials: "include",
      });
      navigate("/");
    } else {
      console.log("testing to see if this code got hit");
      const error = await response.json();
      setError(error.message);
    }
  };



  const handleEmailUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = await getTokenInternal();
    const url = `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/api/accounts/${token.account.id}/email`;
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.access_token}`,
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        const data = await response.json();
        setAccountDetails(data);
        setEmail(email);
        setUpdateEmail(true);
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
    const url = `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/api/accounts/${token.account.id}/username`;
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
        setUsername(username);
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


//   async function handleUpload() {
//     const formData = new FormData();
//     formData.append('upload_file', file);

//     try {
//       const response = await fetch(`/api/accounts/${props.account.id}/profilepicture`, {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error('Upload failed');
//       }

//       const data = await response.json();
//       setProfilePicUrl(`/api/accounts/${props.account.id}/profilepicture`);
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   const handleFileChange = e => {
//   const file = e.target.files[0];
//   setFileUrl(URL.createObjectURL(file));
// }

  return (
    <>
      <div className="account-detail-size">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (
          <>
            <Nav />
            <h1>Account Detail</h1>
            <div>
              <div>
                <h2>Email: {email}</h2>
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
                <h2>Username: {username}</h2>
                <form onSubmit={handleUsernameUpdate}>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <button type="submit">Update Username</button>
                </form>
                {/* <div>
                  <input type="file" accept="image/*" onChange={handleFileChange} />
                  <button onClick={handleUpload}>Upload Profile Picture</button>
                  <img src={fileUrl} />
                </div> */}
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
