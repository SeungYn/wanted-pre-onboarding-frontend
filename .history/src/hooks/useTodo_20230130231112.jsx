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
  return { todos, createTodos };
}
