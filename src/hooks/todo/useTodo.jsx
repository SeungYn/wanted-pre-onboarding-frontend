import { useState } from 'react';

export default function useTodo(todoService) {
  const [todos, setTodos] = useState([]);

  const createTodo = async (todo) => {
    try {
      const res = await todoService.createTodo(todo);
      console.log(res);
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

  const updateTodo = async ({ id, todo, isCompleted }) => {
    try {
      const res = await todoService.updateTodos(id, todo, isCompleted);
      setTodos((todos) => {
        return todos.map((item) => (item.id === res.id ? res : item));
      });
    } catch (err) {
      alert(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await todoService.deleteTodo(id);
    } catch (err) {
      alert(err);
    }
  };

  return { todos, createTodo, getTodos, updateTodo, deleteTodo };
}
