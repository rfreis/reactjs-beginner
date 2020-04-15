import React from 'react';

const Hello = () => {
  // return (
  //   <div>
  //   <h1>Hello Hello</h1>
  //   </div>
  // );
  return React.createElement(
    'div',
    {id: 'Hello', className: 'hello-class'},
    React.createElement('h1', null, 'Hello Children')
  );
}

export default Hello;
