import React from 'react';

type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};
const Greet = (
  /* `props: GreetProps` is defining the type of the `props` parameter that the `Greet`
component receives. It specifies that the `props` parameter should be an object with
a `name` property of type `string`. This helps with type checking and ensures that
the component is used correctly. */
  props: GreetProps
) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `COUCOU ${props.name} ! You've got ${props.messageCount} messages`
          : 'welcome guest'}
      </h2>
    </div>
  );
};

export default Greet;
