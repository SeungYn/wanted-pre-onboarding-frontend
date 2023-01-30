import { useState } from 'react';

export default function TodoInputBar({ createTodo }) {
  const [text, setText] = useState('');
  const onSubmit = () => {
    const value = inputRef.current.value;
    createTodo(value);
  };

  const onChange = (e) => {
    const { value } = e.target;
    setText(value);
  };
  return (
    <div>
      <input data-testid='new-todo-input' />
      <button onClick={onSubmit} data-testid='new-todo-add-button'>
        추가
      </button>
    </div>
  );
}
