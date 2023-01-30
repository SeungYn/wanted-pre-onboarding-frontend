import { useState } from 'react';

export default function useTodo(todoService) {
  const [todos, setTodos] = useState();
  const createTodo = async (todo) => {
    try {
    } catch (err) {
      alert(err);
    }
  };
  return <div></div>;
}
