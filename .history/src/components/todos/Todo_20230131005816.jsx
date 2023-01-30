import React from 'react';

export default function Todo({ id, todo, isCompleted }) {
  return (
    <li key={item.id + item.todo}>
      <label>
        <input type='checkbox' checked={item.isCompleted ? true : false} />
        <span>{item.todo}</span>
      </label>
      <button data-testid='modify-button'>수정</button>
      <button data-testid='delete-button'>삭제</button>
    </li>
  );
}
