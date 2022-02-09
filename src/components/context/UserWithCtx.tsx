import React, {useContext} from 'react';
import {UserContext} from "./userContext";

const UserWithCtx = () => {

    const userContext = useContext(UserContext);

    const handleLogin = () => {
            userContext.setUser({
                name: "Mario",
                email: "mario@gmail.com"
            })
    }
    const handleLogOut = () => {
            userContext.setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogOut}>Logout</button>
            <div>User name is: {userContext.user?.name}</div>
            <div>User email is: {userContext.user?.email}</div>
        </div>
    );
};

export default UserWithCtx;