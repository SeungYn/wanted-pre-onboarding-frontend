import { useService } from '../../context/ServiceContext';
import useTodo from '../../hooks/useTodo';
import TodoInputBar from './TodoInputBar';
import Todos from './Todos';

export default function TodosContainer() {
  const { todoService } = useService();
  const { todos, createTodo } = useTodo(todoService);
  return (
    <section>
      <TodoInputBar handleCreateTodo={createTodo} />
      <Todos todos={todos} />
    </section>
  );
}
