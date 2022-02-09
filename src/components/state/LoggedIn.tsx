import React, { useState } from 'react';

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>LogOut</button>
      <div>
        {isLoggedIn ? (
          <p>
            <strong>User is loggedin</strong>
          </p>
        ) : (
          <p style={{ color: 'red' }}>User is LOGOUT</p>
        )}
      </div>
    </div>
  );
};

export default LoggedIn;
