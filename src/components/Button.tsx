import React from 'react';
type ButtonProps = {
  handleClick: () => void;
};

const Button = (props: ButtonProps) => {
  return <button onClick={props.handleClick}>Click no Event</button>;
};

export default Button;
