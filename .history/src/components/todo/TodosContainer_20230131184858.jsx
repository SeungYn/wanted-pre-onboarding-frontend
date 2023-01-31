import { useEffect } from 'react';
import { useService } from '../../context/ServiceContext';
import useTodo from '../../hooks/todo/useTodo';
import NewTodoForm from './newTodoForm/NewTodoForm';
import Todos from './Todos';
import styles from './TodosGlobal.module.css';

export default function TodosContainer() {
  const { todoService } = useService();

  const { todos, createTodo, getTodos, updateTodo, deleteTodo } =
    useTodo(todoService);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <section className={styles.container}>
      <NewTodoForm handleCreateTodo={createTodo} />
      <Todos todos={todos} onUpdate={updateTodo} deleteTodo={deleteTodo} />
    </section>
  );
}
