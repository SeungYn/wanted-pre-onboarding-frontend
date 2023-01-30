import { useState } from 'react';

export default function Todos({ todos, updateTodo }) {
  const modifyMode = useState(false);
  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id + item.todo}>
          <label>
            <input type='checkbox' checked={item.isCompleted ? true : false} />
            <span>{item.todo}</span>
          </label>
          <button data-testid='modify-button'>수정</button>
          <button data-testid='delete-button'>삭제</button>
        </li>
      ))}
    </ul>
  );
}