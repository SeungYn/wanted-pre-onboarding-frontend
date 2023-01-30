import React, { useState } from 'react';

export default function EditTodoForm({ item, onUpdate, onClose }) {
  const { id, todo, isCompleted } = item;
  const [text, setText] = useState(todo);
  const onSubmit = (e) => {
    e.preventDefault();
    onUpdate({ id, text, isCompleted });
  };

  const onChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setText(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input data-testid='modify-input' onChange={onChange} value={text} />
      <button data-testid='submit-button'>제출</button>
      <button onClick={onClose} data-testid='cancel-button'>
        취소
      </button>
    </form>
  );
}
