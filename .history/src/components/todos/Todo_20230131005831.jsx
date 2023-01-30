import React from 'react';

export default function Todo({ id, todo, isCompleted }) {
  return (
    <li key={id + todo}>
      <label>
        <input type='checkbox' checked={isCompleted ? true : false} />
        <span>{todo}</span>
      </label>
      <button data-testid='modify-button'>수정</button>
      <button data-testid='delete-button'>삭제</button>
    </li>
  );
}
