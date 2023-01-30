import React from 'react';

export default function EditTodoForm({ todo, onUpdate, onClose }) {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit}>
      <input data-testid='modify-input' />
      <button data-testid='submit-button'>제출</button>
      <button onClick={onClose} data-testid='cancel-button'>
        취소
      </button>
    </form>
  );
}
