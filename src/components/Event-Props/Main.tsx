import React from 'react';
import Button from '../Event-Props/Button';
import Input from './Input';

const Main = () => {
  return (
    <div>
      <Button
        handleClick={(event, id) => {
          console.log('Button clicked', event, id);
        }}
      ></Button>
      <Input
        placeholder="Ecrire"
        handleChange={(event) => {
          console.log('coucou', event);
        }}
      ></Input>
    </div>
  );
};

export default Main;
