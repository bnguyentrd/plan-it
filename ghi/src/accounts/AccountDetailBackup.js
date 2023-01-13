// import React, { useState } from "react";

// function AccountDetails() {
//   const [profilePicture, setProfilePicture] = useState(null);
//   //   const [token, login] = useToken();

//   const handleUpload = (e) => {
//     setProfilePicture(e.target.files[0]);
//   };

//   return (
//     <>
//       <div>
//         <h1>Account Detail</h1>
//         <div>
//           <h2>Profile Picture</h2>
//           <input type="file" onChange={handleUpload} />
//           <img
//             src={profilePicture ? URL.createObjectURL(profilePicture) : ""}
//             alt="profile"
//           />
//         </div>
//       </div>
//       <h1>HELLO</h1>
//       <h2>to do list</h2>
//       <li>change username</li>
//       <li>change email</li>
//       <li>change password</li>
//     </>
//   );
// }

// export default AccountDetails;




// ////////////////most updated below
// import React, { useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "./Authentication.js";

// function AccountDetails() {
//   const { token } = useContext(AuthContext);
//   const [profilePicture, setProfilePicture] = useState(null);
//   const [accountDetails, setAccountDetails] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!token) {
//       navigate("/login");
//     } else {
//       async function fetchAccountDetails() {
//         const url = `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/api/accounts/me/`;
//         try {
//           const response = await fetch(url, {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });
//           if (response.ok) {
//             const data = await response.json();
//             setAccountDetails(data);
//           } else {
//             navigate("/login");
//           }
//         } catch (e) {
//           console.log(e);
//           navigate("/login");
//         }
//       }
//       fetchAccountDetails();
//     }
//   }, [token, navigate]);

//   const handleUpload = (e) => {
//     setProfilePicture(e.target.files[0]);
//   };

//   return (
//     <>
//       <div>
//         <h1>Account Detail</h1>
//         <div>
//           <h2>Profile Picture</h2>
//           <input type="file" onChange={handleUpload} />
//           <img
//             src={profilePicture ? URL.createObjectURL(profilePicture) : ""}
//             alt="profile"
//           />
//         </div>
//         <div>
//           <h2>Username: {accountDetails.username}</h2>
//           <h2>Email: {accountDetails.email}</h2>
//         </div>
//       </div>
//       <h1>HELLO</h1>
//       <h2>to do list</h2>
//       <li>change username</li>
//       <li>change email</li>
//       <li>change password</li>
//     </>
//   );
// }

// export default AccountDetails;
