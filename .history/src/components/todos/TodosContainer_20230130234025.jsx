import { useService } from '../../context/ServiceContext';
import useTodo from '../../hooks/useTodo';
import TodoInputBar from './TodoInputBar';
import Todos from './Todos';

export default function TodosContainer() {
  const {} = useService();
  const { todos, createTodo } = useTodo();
  return (
    <section>
      <TodoInputBar handleCreateTodo={createTodo} />
      <Todos todos={todos} />
    </section>
  );
}
