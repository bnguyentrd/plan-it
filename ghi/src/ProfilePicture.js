import React, { useEffect, useState } from 'react';
import { getTokenInternal } from './accounts/Authentication';
import { useNavigate } from 'react-router-dom';


function ProfilePicture() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/api/accounts/:id');
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function checkLoginStatus() {
      const tokenData = await getTokenInternal();
      if (tokenData) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }
    checkLoginStatus();
  }, []);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="picposition">
      <div
        className="profile-pic"
        onClick={handleClick}
      >
      </div>
    </div>
  );
}

export default ProfilePicture;