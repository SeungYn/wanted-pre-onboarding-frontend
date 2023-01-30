import React from 'react';

export default function useTodo(todoService) {
  const createTodo = async (todo) => {
    return await todoService.createTodo(todo);
  };
  return <div></div>;
}
