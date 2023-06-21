import React from 'react';

/**
 * The OscarProps type defines a React component prop that expects a child node.
 * @property children - The `OscarProps` type is defining a single property called `children` which is
 * of type `React.ReactNode`. This means that any component that uses this type can accept any valid
 * React node as a child component. The `children` prop is a special prop in React that allows
 * components to be
 */
type OscarProps = {
  children: React.ReactNode;
};
const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};

export default Oscar;
