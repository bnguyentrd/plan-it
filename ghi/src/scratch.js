import React, { useState } from 'react';

function MainPage() {
  const [currentUser, setCurrentUser] = useState(null);

  const logout = () => {
    fetch('/api/logout', {
      method: 'DELETE',
      credentials: 'include', // include cookies in the request
    })
    .then(() => {
      setCurrentUser(null);
    });
  }

  return (
    <div>
      {currentUser ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <div>You are not logged in</div>
      )}
    </div>
  );
}

export default MainPage;
