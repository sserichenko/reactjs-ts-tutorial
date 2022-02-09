import React, { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  // const [user, setUser] = useState<AuthUser>({} as AuthUser); //если нужно начальное знчение не null, а пустой обьект по типу Auth
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({ name: 'Mario', email: 'mario@gmail.com' });
  };
  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>LogOut</button>
      <div>
        User Name is: <strong>{user?.name}</strong>
      </div>
      <div>
        User email is: <strong>{user?.email}</strong>
      </div>
    </div>
  );
};

export default User;
