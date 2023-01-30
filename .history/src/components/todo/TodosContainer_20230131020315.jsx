import { useEffect } from 'react';
import { useService } from '../../context/ServiceContext';
import useTodo from '../../hooks/todo/useTodo';
import NewTodoForm from './NewTodoForm';
import Todos from './Todos';

export default function TodosContainer() {
  const { todoService } = useService();

  const { todos, createTodo, getTodos, updateTodo } = useTodo(todoService);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <section>
      <NewTodoForm handleCreateTodo={createTodo} />
      <Todos todos={todos} />
    </section>
  );
}
