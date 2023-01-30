import { useState } from 'react';

export default function TodoInputBar({ handleCreateTodo }) {
  const [text, setText] = useState('');
  const onSubmit = () => {
    handleCreateTodo(text);
    setText('');
  };

  const onChange = (e) => {
    const { value } = e.target;
    setText(value);
  };
  return (
    <div>
      <input onChange={onChange} data-testid='new-todo-input' />
      <button onClick={onSubmit} data-testid='new-todo-add-button'>
        추가
      </button>
    </div>
  );
}
