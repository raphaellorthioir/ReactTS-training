import React from 'react';
import { useState } from 'react';
const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // precising types for ustate hooks is not obliged bcz of type inference, but works for simple values

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}> Logout</button>
      <div> User is{isLoggedIn ? ' logged in' : ' logged out'}</div>
    </div>
  );
};

export default LoggedIn;
