import { useEffect } from 'react';
import { useService } from '../../context/ServiceContext';
import useTodo from '../../hooks/todo/useTodo';
import NewTodoForm from './NewTodoForm';
import Todos from './Todos';
import styles from './TodosContainer.module.css';

export default function TodosContainer() {
  const { todoService } = useService();

  const { todos, createTodo, getTodos, updateTodo, deleteTodo } =
    useTodo(todoService);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <section>
      <NewTodoForm handleCreateTodo={createTodo} />
      <Todos todos={todos} onUpdate={updateTodo} deleteTodo={deleteTodo} />
    </section>
  );
}
