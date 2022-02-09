import React from 'react';
type ButtonWithEventProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const ButtonWithEvent = (props: ButtonWithEventProps) => {
  return <button onClick={(event) => props.handleClick(event, 15)}>Button With Event TYPE</button>;
};

export default ButtonWithEvent;