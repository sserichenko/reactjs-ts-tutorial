import React from 'react';

type GreetProps = {
  name: string;
  messagesCount?: number;  //optional types. They might be or not. TS will not send an error
  isLoggedIn: boolean;
};

const Greet = ({name, isLoggedIn, messagesCount = 0}: GreetProps) => {

  return (
    <div>
      {isLoggedIn ? (
        <h2>
          Welcome, {name}, here! You have {messagesCount} unread messages!
        </h2>
      ) : (
        <h2>Welcome, Guest! Please, LogIn for continue</h2>
      )}
    </div>
  );
};

export default Greet;
