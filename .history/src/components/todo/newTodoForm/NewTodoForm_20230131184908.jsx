import { useState } from 'react';
import styles from './NewTodoForm.module.css';

export default function NewTodoForm({ handleCreateTodo }) {
  const [text, setText] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    handleCreateTodo(text);
    setText('');
  };

  const onChange = (e) => {
    const { value } = e.target;
    setText(value);
  };
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        className={styles.text}
        onChange={onChange}
        data-testid='new-todo-input'
        value={text}
      />
      <button data-testid='new-todo-add-button'>추가</button>
    </form>
  );
}
