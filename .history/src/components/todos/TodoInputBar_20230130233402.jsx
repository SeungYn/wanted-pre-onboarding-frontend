import { useRef } from 'react';

export default function TodoInputBar({ createTodo }) {
  const inputRef = useRef();
  const onSubmit = () => {
    const value = inputRef.current.value;
    console.log(value);
  };
  return (
    <div>
      <input ref={inputRef} data-testid='new-todo-input' />
      <button data-testid='new-todo-add-button'>추가</button>
    </div>
  );
}
