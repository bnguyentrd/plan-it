// import React, { useState } from 'react';

// function AccountDetails() {
//   const [profilePicture, setProfilePicture] = useState(null);

//   const handleUpload = (e) => {
//     setProfilePicture(e.target.files[0]);
//   }

//   return (
//     <div>
//       <h1>Account Detail</h1>
//       <div>
//         <h2>Profile Picture</h2>
//         <input type="file" onChange={handleUpload} />
//         <img src={profilePicture ? URL.createObjectURL(profilePicture) : ''} alt="profile" />
//       </div>
//     </div>
//   );
// }

// export default AccountDetails;