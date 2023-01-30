import { useState } from 'react';

export default function useTodo(todoService) {
  const [todos, setTodos] = useState([]);

  const createTodo = async (todo) => {
    try {
      const res = await todoService.createTodo(todo);
      setTodos((todos) => [...todos, res]);
    } catch (err) {
      alert(err);
    }
  };

  const getTodos = async () => {
    try {
      const res = await todoService.getTodos();
      setTodos((todos) => [...res]);
    } catch (err) {
      alert(err);
    }
  };

  return { todos, createTodo };
}
