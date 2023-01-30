import React from 'react';

export default function todos({ todos }) {
  return (
    <ul>
      {todos.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}
