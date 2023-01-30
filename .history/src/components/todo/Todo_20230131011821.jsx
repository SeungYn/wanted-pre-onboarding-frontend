import React from 'react';
import useTodoModifyMode from '../../hooks/todo/useTodoModifyMode';
import EditTodoForm from './EditTodoForm';

export default function Todo({ item }) {
  const { isModifyMode, toggleModifyMode } = useTodoModifyMode();
  const { id, todo, isCompleted } = item;
  return (
    <li>
      <label htmlFor='check'>
        <input
          type='checkbox'
          name={'check'}
          checked={isCompleted ? true : false}
        />
        {!isModifyMode && <span>{todo}</span>}
      </label>
      {!isModifyMode && (
        <>
          <button onClick={toggleModifyMode} data-testid='modify-button'>
            수정
          </button>
          <button data-testid='delete-button'>삭제</button>
        </>
      )}
      {isModifyMode && <EditTodoForm />}
    </li>
  );
}
