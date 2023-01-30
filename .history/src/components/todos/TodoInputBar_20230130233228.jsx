import { useRef } from 'react';

export default function TodoInputBar() {
  const inputRef = useRef();
  return (
    <div>
      <input ref={inputRef} data-testid='new-todo-input' />
      <button data-testid='new-todo-add-button'>추가</button>
    </div>
  );
}
