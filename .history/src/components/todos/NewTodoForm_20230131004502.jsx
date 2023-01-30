import { useState } from 'react';

export default function NewTodoForm({ handleCreateTodo }) {
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
    <form>
      <input onChange={onChange} data-testid='new-todo-input' value={text} />
      <button onClick={onSubmit} data-testid='new-todo-add-button'>
        추가
      </button>
    </form>
  );
}
