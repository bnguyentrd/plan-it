import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "./Authentication";

function AccountDetails() {
  const [profilePicture, setProfilePicture] = useState(null);
  const [accountDetails, setAccountDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchAccountDetails() {
      const token = await getToken();
      if (!token) {
        navigate("/login");
      } else {
        // const url = `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/api/accounts/me/`;
        const url = `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/api/accounts/{id}/`;
        try {
          const response = await fetch(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.ok) {
            const data = await response.json();
            setAccountDetails(data);
          } else {
            navigate("/login");
          }
        } catch (e) {
          console.log(e);
          navigate("/login");
        }
      }
    }
    fetchAccountDetails();
  }, []);

  const handleUpload = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  return (
    <>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (
          <>
            <h1>Account Detail</h1>
            <div>
              <h2>Profile Picture</h2>
              <input type="file" onChange={handleUpload} />
              <img
                src={profilePicture ? URL.createObjectURL(profilePicture) : ""}
                alt="profile"
              />
            </div>
            <div>
              <h2>Username: {accountDetails.username}</h2>
              <h2>Email: {accountDetails.email}</h2>
            </div>
          </>
        )}
      </div>
      <h1>HELLO</h1>
      <h2>to do list</h2>
      <li>change username</li>
    </>
  );
}

export default AccountDetails;
