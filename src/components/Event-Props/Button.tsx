import React from 'react';

/**
 * The type ButtonProps defines a prop called handleClick that is a function with no return value.
 * @property handleClick - handleClick is a function that takes no arguments and returns nothing
 * (void). It is likely intended to be used as an event handler for a button click event.
 */
type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
    </div>
  );
};

export default Button;
