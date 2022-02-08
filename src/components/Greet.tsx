import React from 'react';

type GreetProps = {
  name: string;
  messagesCount: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Welcome, {props.name}, here! You have {props.messagesCount} unread messages!
        </h2>
      ) : (
        <h2>Welcome, Guest! Please, LogIn for continue</h2>
      )}
    </div>
  );
};

export default Greet;
