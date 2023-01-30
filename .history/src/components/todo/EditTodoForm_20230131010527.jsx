import React from 'react';

export default function EditTodoForm() {
  return (
    <form>
      <input data-testid='modify-input' />
      <button data-testid='submit-button'>제출</button>
      <button data-testid='cancel-button'>취소</button>
    </form>
  );
}
