import { useEffect } from 'react';
import { useService } from '../../context/ServiceContext';
import useTodo from '../../hooks/todo/useTodo';
import NewTodoForm from './newTodoForm/NewTodoForm';
import Todos from './todos/Todos';
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
      <h1 className={styles.title}>투두 리스트</h1>
      <NewTodoForm handleCreateTodo={createTodo} />
      <Todos todos={todos} onUpdate={updateTodo} deleteTodo={deleteTodo} />
    </section>
  );
}
