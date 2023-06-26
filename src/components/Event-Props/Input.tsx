import React from 'react';

type InputProps = {
  value: string;
  placeholder: string;
  /* `handleChange` is a function that takes an event of type `React.ChangeEvent<HTMLInputElement>` as
  its argument and returns nothing (`void`). This function is passed as a prop to the `Input`
  component and is called whenever the input field value changes. */
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = ({ value, placeholder, handleChange }: InputProps) => { // a la place de props on destructure => 
  // destructuration
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('coucou', event);
  };
  return (
    <div>
      <input
        value={value}
        placeholder={placeholder}
        type="text"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Input;
