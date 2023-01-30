import { useState } from 'react';
import { useService } from '../../context/ServiceContext';
import Todo from './Todo';

export default function Todos({ todos, updateTodo }) {
  const { todoService } = useService();
  const [modifyMode] = useState(false);
  return (
    <ul>
      {todos.map((item) => (
        <Todo />
      ))}
    </ul>
  );
}
