import React from 'react';
import useTodoModifyMode from '../../hooks/todo/useTodoModifyMode';

export default function Todo({ id, todo, isCompleted }) {
  const { isModifyMode, toggleModifyMode } = useTodoModifyMode();
  return (
    <li key={id + todo}>
      <label>
        <input type='checkbox' checked={isCompleted ? true : false} />
        <span>{todo}</span>
      </label>

      <button data-testid='delete-button'>삭제</button>
      {!modifyMode && (
        <>
          <button onClick={toggleModifyMode} data-testid='modify-button'>
            수정
          </button>
          <button data-testid='delete-button'>삭제</button>
        </>
      )}
    </li>
  );
}
